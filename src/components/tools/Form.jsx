import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';

import UploadFileIcon from '@mui/icons-material/UploadFile';

export default function Form( {page} ) {
  
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
		>

			<Box sx={ {width: '50%', p: 3, display: 'flex', flexDirection: 'column', gap: 2} }>

				<TextField
					label="Titre"
					name="title"
					fullWidth
				/>

				{/* Description */}
				<TextField
					label="Description"
					name="description"
					multiline
					rows={4}
					fullWidth
				/>

				{/* Prix */}
				<TextField
					label="Prix (€)"
					name="price"
					type="number"
					fullWidth
				/>

				{/* Options */}
				<TextField
					select
					value=""
					label="Catégorie"
					name="category"
					fullWidth
				>
					<MenuItem value="1">Livre</MenuItem>
					<MenuItem value="2">Objets à collectionner</MenuItem>
					<MenuItem value="3">Vêtement</MenuItem>
					<MenuItem value="4">Autre</MenuItem>
				</TextField>

				<Button type="submit" variant="contained">
					Enregistrer
				</Button>
			</Box>

			{ page === 'online' ?
				<Box sx={ {width: '50%',p: 3, display: 'flex', flexDirection: 'column', gap: 2} }>
					<TextField
						label="Indiquez les liens (séparer par des ;)"
						name="platform"
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
		</Box>
	);
};

