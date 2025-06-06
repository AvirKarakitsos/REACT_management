import {Box,Typography,TextField,MenuItem,Button, Select, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useForm, Controller } from "react-hook-form";
//import { serverUrl } from '../../utilities/constants';

export default function Form( {page, mode, defaultValues = {}} ) {
	const { register, handleSubmit, control, watch} = useForm({defaultValues}); //formState: { errors }
	const selectedState = watch("state"); 
	
	const onSubmit = (data) => {
		console.log(mode);
		console.log(data);
	} 
	// const onSubmit = async (data) => {
	// 	try {
	// 		const response = await fetch(`${serverUrl}/api/articles`, {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json", // Indique qu'on envoie du JSON
	// 		},
	// 		body: JSON.stringify(data), // Convertit les données du formulaire en JSON
	// 		});

	// 		if (!response.ok) {
	// 		throw new Error("Erreur lors de l'envoi du formulaire");
	// 		}

	// 		const result = await response.json();
	// 		console.log(result);
			
	// 		//alert("Article enregistré avec succès !");
	// 	} catch (error) {
	// 		console.error("Erreur lors de la requête :", error);
	// 		//alert("Une erreur est survenue. Veuillez réessayer.");
	// 	}
	// };
  
	return (
		<Box
			component="form"
			sx={{
				display: 'flex',
				gap: 2,
				p: 3,
				border: '1px solid #ccc',
				borderRadius: 2,
				backgroundColor: '#f9f9f9',
			}}
			onSubmit={handleSubmit(onSubmit)}
		>

			<Box sx={ {p: 3, display: 'flex', flexDirection: 'column', gap: 2} }>

				<TextField
					label="Titre"
					{...register("title", { required: "Ce champ est requis" })}
					fullWidth
				/>
				{ page === "stock" || page === "online"
					? <TextField
						label="Description"
						{...register("description", { required: "Ce champ est requis" })}
						multiline
						rows={4}
						fullWidth
					/>
					: null
				}

				<TextField
					label="Prix (€)"
					{...register("price", { required: "Ce champ est requis" })}
					type="number"
					fullWidth
				/>

				{/* Options */}
				<Controller
					name="category"
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

				<Button type="submit" variant="contained">
					{mode === "edit" ? "Mettre à jour" : "Créer"}
				</Button>
			</Box>

			<Box sx={ {p: 3, display: 'flex', flexDirection: 'column', gap: 2} }>

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

					<Box sx={{ mt: 3 }}>
						<input
							accept="image/*"
							style={{ display: 'none' }}
							id="upload-image"
							type="file"
						/>
						<label htmlFor="upload-image">
							<Button variant="contained" component="span" startIcon={<UploadFileIcon />}>
							Ajouter une image
							</Button>
						</label>

						<Typography variant="body2" sx={{ mt: 1 }}>
						Fichier sélectionné
						</Typography>
					</Box></>
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
	);
};

