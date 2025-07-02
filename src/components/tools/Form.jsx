import {Box,TextField,MenuItem,Button, Select, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { serverUrl } from '../../utilities/constants';
import { RefreshContext } from '../../utilities/context/RefreshContext.js';
import { useContext, useState } from 'react';
import Notification from './Notification.jsx'


export default function Form( {page, mode, defaultValues = {}, handleClose = null} ) {
	const { register, handleSubmit, control, watch, reset} = useForm({defaultValues}); //formState: { errors }
	const selectedState = watch("state");
	const {triggerRefresh} = useContext(RefreshContext)
	const [valid, setValid] = useState(false)
	const [snackbar, setSnackbar] = useState({
		isOpen: false,
		status: null,
		message: null
	})

	const onSubmit = async (data) => {
		try {
			setValid(true)
			const obj = {
				create:{
					url: `${serverUrl}/articles`,
					verbe:"POST",
				},
				edit:{
					url: `${serverUrl}/articles/${data.id}`,
					verbe:"PUT",
				},
			}

			const response = await fetch(obj[mode].url, {
				method: obj[mode].verbe,
				headers: {
					"Content-Type": "application/json", 
				},
				body: JSON.stringify({...data, price: data.price*100}), 
			});

			if (!response.ok) {
				setSnackbar({
					isOpen: true, 
					status: "error", 
					message:"Erreur lors de l'envoi du formulaire"
				})
				setValid(false)
			}

			const result = await response.json();

			setSnackbar({
				isOpen: true, 
				status: "success", 
				message: result.message
			})

			reset()
			setValid(false)
			
			setTimeout(() => {
				if(handleClose !== null) handleClose()
				triggerRefresh()
			}, "3000");
			
			
		} catch (error) {
			console.error("Erreur lors de la requête :", error);
			setSnackbar({
				isOpen: true, 
				status: "error", 
				message:"Erreur lors de l'envoi du formulaire"
			})
		}
	};
  
	return (
		<>
		
		<Notification snackbar={snackbar} handleSnackbar={setSnackbar}/>
		
		<Box
			component="form"
			sx={{
				display: 'flex',
				gap: 4,
				p: 3,
				border: '1px solid #ccc',
				borderRadius: 2,
				backgroundColor: '#f9f9f9',
			}}
			onSubmit={handleSubmit(onSubmit)}
		>


			<Box sx={ {display: 'flex', flexDirection: 'column', gap: 4} }>

				<TextField
					label="Titre"
					{...register("title", { required: "Ce champ est requis" })}
					fullWidth
				/>
				
				<TextField
					label="Description"
					{...register("description", { required: "Ce champ est requis" })}
					multiline
					rows={4}
					fullWidth
				/>

				<input
					id="price"
					type="number"
					step="0.01"
					min="0"
					placeholder="Prix"
					{...register('price',{ required: "Ce champ est requis" })}
					className='inputPrice'/>

				{/* Options */}
				<Controller
					name="categoryId"
					control={control}
					defaultValue=""
					rules={{ required: "Ce champ est requis" }}
					render={({ field }) => (
						<Select
							{...field}
							fullWidth
							label="Catégorie"
						>
							<MenuItem value="1">Livre</MenuItem>
							<MenuItem value="2">Objets à collectionner</MenuItem>
							<MenuItem value="3">Vêtement</MenuItem>
							<MenuItem value="4">Autre</MenuItem>
						</Select>
					)}
				/>
				{
					!valid
						? <Button type="submit" variant="contained">
								{mode === "edit" ? "Mettre à jour" : "Créer"}
							</Button>
						: null
					}
			</Box>

			<Box sx={ {display: 'flex', flexDirection: 'column', gap: 2} }>

				{mode === "edit"
					? <Controller
						name="state"
						control={control}
						rules={{ required: "Ce champ est requis" }}
						render={({ field }) => (
							<Select
							{...field}
							fullWidth
							label="Etat"
							>
								<MenuItem value="stock">En Stock</MenuItem>
								<MenuItem value="online">En Ligne</MenuItem>
								<MenuItem value="sold">Vendu</MenuItem>
							</Select>
					)}
					/>
					: <input type="hidden" value={page==="analytic" ? "sold" : page} {...register("state")} />
				}

				{ selectedState === "online"  ?
					<><TextField
						label="Indiquez les liens (séparer par des ;)"
						{...register("link", { required: "Ce champ est requis" })}
						fullWidth
					/>
					<TextField
						label="Nombre de photos de l'article"
						type='number'
						{...register("photos", { required: "Ce champ est requis" })}
						fullWidth
					/></>
					: null
				}

				{ selectedState === "sold" ?
					<><FormControl component="fieldset">
						<FormLabel component="legend">Vendu sur :</FormLabel>
						<Controller
							name="platform"
							control={control}
							defaultValue=""
							rules={{ required: "Ce champ est requis" }}
							render={({ field }) => (
								<RadioGroup
								{...field}
								sx={{ display: "flex", gap: 1 }}
								>
								<Box sx={{ display: "flex", columnGap: 4 }}>
									<FormControlLabel value="1" control={<Radio />} label="Vinted" />
									<FormControlLabel value="2" control={<Radio />} label="Rakuten" />
								</Box>
								<Box sx={{ display: "flex", columnGap: 4 }}>
									<FormControlLabel value="3" control={<Radio />} label="Leboncoin" />
									<FormControlLabel value="4" control={<Radio />} label="Ebay" />
								</Box>
								</RadioGroup>
							)}
						/>
                    </FormControl>
					<label htmlFor="sold_at" style={{ color: "#8D8D8D" }}>Vendu le: </label>
					<input 
						id='sold_at' 
						type='date' 
						{...register("sold_at")}
 						 style={{ height: "50px", padding: "0 5x" }}
						  /></>
						  : null
						}
			
				
			</Box>
		</Box>
		</>
	);
};

