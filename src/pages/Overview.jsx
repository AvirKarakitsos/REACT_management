import MiniCard from '../components/tools/MiniCard';
import Grid from '../components/tools/Grid';
import CercleContainer from '../components/tools/CercleContainer'
//import {gridData, barData1} from '../utilities/common.jsx'
import { barData1} from '../utilities/common.jsx'

import Inventory2Icon from '@mui/icons-material/Inventory2';
import LaptopIcon from '@mui/icons-material/Laptop';
import EuroIcon from '@mui/icons-material/Euro';

import { Box, Typography, Paper } from '@mui/material';
import Bar from '../components/tools/Bar.jsx';


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

			
			<Box sx={{display: 'flex',}}>

				<Paper elevation={2}  sx={(theme) => ({
						...theme.customComponents.section,
						height: '200px',
						width: '40%',
					})}>
					
					<Typography variant="h2">
						Les ventes du mois
					</Typography>
					<Typography sx={ {width: '45%', fontSize: '50px', } }>
						35 €
					</Typography>
				</Paper>

				<Paper elevation={2} sx={(theme) => ({
						...theme.customComponents.section,
						width: '50%',
					})}>
						
					<Bar table={barData1}/>
				
				</Paper>

			</Box>

			
			<Box elevation={1} sx={(theme) => theme.customComponents.section}>
				<Typography variant="h2">
					Les dernières ventes
				</Typography>
				{/* <Grid columns={gridData.columns} rows={gridData.rows}/> */}
				<Grid />
			</Box>
		</Box>
	);
}
