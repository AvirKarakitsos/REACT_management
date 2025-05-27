import {
  Box,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';

const FormulaireProduit = ( {children} ) => {
  
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

		<Box sx={ {width: '50%',p: 3, display: 'flex', flexDirection: 'column', gap: 2} }>
			{children}
		</Box>
	</Box>
  );
};

export default FormulaireProduit;
