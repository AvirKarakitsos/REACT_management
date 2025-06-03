import MiniCard from '../components/tools/MiniCard';
import Grid from '../components/tools/Grid';
import CercleContainer from '../components/tools/CercleContainer'
import CircularProgress from '@mui/material/CircularProgress';

import Inventory2Icon from '@mui/icons-material/Inventory2';
import LaptopIcon from '@mui/icons-material/Laptop';
import EuroIcon from '@mui/icons-material/Euro';
import Bar from '../components/tools/Bar.jsx';

import { Box, Typography, Paper } from '@mui/material';
import { useFetch } from '../utilities/useFetch.jsx';
import {serverUrl} from '../utilities/constants.js'


export default function Overview() {
	const { table: figures, load: isLoadingFigures } = useFetch(`${serverUrl}/articles/all/figures`)
	const { table: barData, load: isLoadingBarData } = useFetch(`${serverUrl}/articles/sold/recent`)
	const { table: dataGrid, load: isLoadingDataGrid } = useFetch(`${serverUrl}/articles/all/recent`)
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

			<MiniCard title="Produits en stock" number={figures.numberStock} load={isLoadingFigures}>
				<CercleContainer>
					<Inventory2Icon fontSize="small" />
				</CercleContainer>
			</MiniCard>
			
			<MiniCard title="Produits en ligne" number={figures.numberOnline} load={isLoadingFigures}>
				<CercleContainer>
					<LaptopIcon fontSize="small" />
				</CercleContainer>
			</MiniCard>
			<MiniCard title="Gain Total" number={`${figures.sumSold/100}€`} load={isLoadingFigures}>
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
						{ !isLoadingBarData ? `${barData.totalSum}€` :  <CircularProgress/>}
					</Typography>
				</Paper>

				<Paper elevation={2} sx={(theme) => ({
						...theme.customComponents.section,
						height:'400px',
						width: '50%',
					})}>
						
					<Bar table={barData} load={isLoadingBarData}/>
				
				</Paper>

			</Box>

			
			<Box elevation={1} sx={(theme) => theme.customComponents.section}>
				<Typography variant="h2">
					Les derniers articles mis en ligne
				</Typography>
				<Grid page="overview" data={dataGrid} load={isLoadingDataGrid}/>
			</Box>
		</Box>
	);
}
