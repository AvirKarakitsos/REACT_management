import MiniCard from '../components/tools/MiniCard';
import CercleContainer from '../components/tools/CercleContainer'

import Inventory2Icon from '@mui/icons-material/Inventory2';
import LaptopIcon from '@mui/icons-material/Laptop';
import EuroIcon from '@mui/icons-material/Euro';

import { Box } from '@mui/material';


export default function Stock() {
    return (
        <Box
			component="main"
			sx={{
				flexGrow: 1,
				p: 4,
				ml: '240px', // largeur du Drawer
				mt: '64px', // hauteur du Header
				backgroundColor: 'background.paper'
			}}
		>
		
		{/* Permet de pousser le contenu sous l’AppBar si besoin */}
			{/* <Toolbar />  */}

			{/* Partie Haut */}
			<Box
				sx={{
				display:'flex',
				justifyContent: 'space-evenly',
				alignItems:'center',
				mb: 3,
				p: 4
				}}
			>
				<MiniCard title="Produits en stock" number='3'>
					<CercleContainer>
						<Inventory2Icon fontSize="small" />
					</CercleContainer>
				</MiniCard>
				<MiniCard title="Produits en ligne" number='5'>
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
        </Box>
    );
}