import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';

const FormulaireProduit = () => {
  
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 500,
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
      }}
    >

      <TextField
        label="Titre"
        name="titre"
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
        name="prix"
        type="number"
        fullWidth
      />

      {/* Options */}
      <TextField
        select
        label="Catégorie"
        name="option"
        fullWidth
      >
        <MenuItem value="choix1">Livre</MenuItem>
        <MenuItem value="choix2">Vêtement</MenuItem>
        <MenuItem value="choix3">Autre</MenuItem>
      </TextField>

      <Button type="submit" variant="contained">
        Enregistrer
      </Button>
    </Box>
  );
};

export default FormulaireProduit;
