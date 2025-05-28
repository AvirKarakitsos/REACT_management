import {Box,Typography,TextField,MenuItem,Button, Select, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useForm, Controller } from "react-hook-form";

export default function Form( {page} ) {
	const { register, handleSubmit, control} = useForm(); //watch, formState: { errors } 
  	const onSubmit = data => console.log(data);
  
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

			<Box sx={ {width: '50%', p: 3, display: 'flex', flexDirection: 'column', gap: 2} }>

				<input type="hidden" value={page} {...register("state")} />

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
					Enregistrer
				</Button>
			</Box>

			{ page === 'online' ?
				<Box sx={ {width: '50%',p: 3, display: 'flex', flexDirection: 'column', gap: 2} }>
					<TextField
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
					</Box>
				</Box>
				: null
			}


			{ page === 'sold' ?
				<Box sx={ {width: '50%',p: 3, display: 'flex', flexDirection: 'column', gap: 2} }>
					<FormControl component="fieldset">
						<FormLabel component="legend">Disponible sur :</FormLabel>
						<Controller
							name="platform"
							control={control}
							defaultValue=""
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
				</Box>
				: null
			}
		</Box>
	);
};

