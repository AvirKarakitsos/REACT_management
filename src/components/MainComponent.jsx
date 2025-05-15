import { Box, Typography, Toolbar } from '@mui/material';
import MiniCard from './tools/MiniCard';
import Grid from './tools/Grid';
import CercleContainer from './tools/CercleContainer'
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LaptopIcon from '@mui/icons-material/Laptop';
import EuroIcon from '@mui/icons-material/Euro';


export default function MainContent() {
	return (
		<Box
		component="main"
		sx={{
			flexGrow: 1,
			p: 6,
			ml: '240px', // largeur du Drawer
			mt: '64px', // hauteur du Header
			backgroundColor: 'backgound.default'
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
			border: '1px solid black',
			mb: 3
			}}
		>
			<MiniCard title="Items en stock" number='3'>
				<CercleContainer>
					<Inventory2Icon fontSize="small" />
				</CercleContainer>
			</MiniCard>
			<MiniCard title="Items en ligne" number='5'>
				<CercleContainer>
					<LaptopIcon fontSize="small" />
				</CercleContainer>
			</MiniCard>
			<MiniCard title="Gain Total" number='253 €'>
				<CercleContainer>
					<EuroIcon fontSize="small" />
				</CercleContainer>
			</MiniCard>

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
			<Typography variant="h2">
				Les ventes du mois
			</Typography>

			<Box sx={ {display: 'flex'} }>
				<Typography sx={ {fontSize: '50px', } }>
					35 €
				</Typography>
				{/* Graph */}
			</Box>

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
			<Typography variant="h2">
				Les dernières ventes
			</Typography>
			<Grid/>
		</Box>
		</Box>
	);
}
