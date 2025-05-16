import MiniCard from '../components/tools/MiniCard';
import Grid from '../components/tools/Grid';
import CercleContainer from '../components/tools/CercleContainer'

import Inventory2Icon from '@mui/icons-material/Inventory2';
import LaptopIcon from '@mui/icons-material/Laptop';
import EuroIcon from '@mui/icons-material/Euro';

import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material';


export default function Overview() {
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

			{/* Partie Milieu */}
			<Box elevation={1} sx={(theme) => theme.customComponents.section}>
				<Typography variant="h2">
					Les ventes du mois
				</Typography>

				<Box sx={ {display: 'flex'} }>
					<Typography sx={ {width: '45%', fontSize: '50px', } }>
						35 €
					</Typography>

					<BarChart
						height={300}
						borderRadius={8}
						xAxis={[
							{
							scaleType: 'band',
							data: ['Mois en cours'],
							barGapRatio: 0.8,
							},
						]}
						series={[
							{
							data: [2],
							color: '#62fd89',
							label: 'Rakuten'
							},
							{
							data: [5],
							color: '#fd6262',
							label: 'Leboncoin'
							},
							{
							data: [3],
							color: '#fdb462',
							label: 'Vinted'
							},
						]}
					/>
				</Box>

			</Box>

			{/* Partie Bas */}
				<Box elevation={1} sx={(theme) => theme.customComponents.section}>
				<Typography variant="h2">
					Les dernières ventes
				</Typography>
				<Grid/>
			</Box>
		</Box>
	);
}
