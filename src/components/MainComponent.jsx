import { Box, Typography, Toolbar } from '@mui/material';
import MiniCard from './MiniCard';

export default function MainContent() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        ml: '240px', // largeur du Drawer
        mt: '64px', // hauteur du Header
      }}
    >
      <Toolbar /> {/* Permet de pousser le contenu sous l’AppBar si besoin */}

      {/* Partie Haut */}
      <Box
        sx={{
          height: '200px',
          display:'flex',
          justifyContent: 'space-evenly',
		  alignItems:'center',
          backgroundColor: '#f3f3f3',
          borderRadius: 2,
          mb: 3
        }}
      >
        <MiniCard/>
        <MiniCard/>
        <MiniCard/>
      </Box>

      {/* Partie Milieu */}
      <Box
        sx={{
          height: '400px',
          backgroundColor: '#e0f7fa',
          borderRadius: 2,
          mb: 3,
          p: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Les ventes du jour
        </Typography>
        {/* Contenu à ajouter ici */}
      </Box>

      {/* Partie Bas */}
      <Box
        sx={{
          minHeight: '200px',
          backgroundColor: '#fce4ec',
          borderRadius: 2,
          p: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Bilan du mois en cours
        </Typography>
        {/* Contenu à ajouter ici */}
      </Box>
    </Box>
  );
}
