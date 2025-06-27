import { Box, Typography, Paper } from '@mui/material';
import Form from '../components/tools/Form'
import CollapseComponent from '../components/tools/Collapse'
import Pie from '../components/tools/Pie'
import Grid from '../components/tools/Grid'
import MiniCard from '../components/tools/MiniCard'
import CercleContainer from '../components/tools/CercleContainer'
import Inventory2Icon from '@mui/icons-material/Inventory2';
import EuroIcon from '@mui/icons-material/Euro';

import { useFetch } from '../utilities/useFetch.jsx';
import {serverUrl} from '../utilities/constants.js'


export default function Stock() {
	const { table: figures, load: isLoadingFigures } = useFetch(`${serverUrl}/articles/all/figures`)
	const { table: pieData, load: isLoadingPieData } = useFetch(`${serverUrl}/articles/categories/stock`)
	const { table: gridData, load: isLoadingGridData } = useFetch(`${serverUrl}/articles/stock`)
	const { table: value, load: isLoadingValue } = useFetch(`${serverUrl}/articles/value/stock`)

    return (
        <Box
			component="main"
			sx={{
				flexGrow: 1,
				p: 4,
				ml: '240px',
				mt: '64px',
				backgroundColor: 'background.paper'
			}}
		>

			<Box
				sx={{
				display:'flex',
				justifyContent: 'space-evenly',
				alignItems:'flex-start',
				mb: 3,
				p: 4
				}}
			>
				<Box
				sx={{
					display:'flex',
					flexDirection: 'column',
					rowGap: 5
					}}
				>
					
					<MiniCard title="Produits en stock" number={figures.numberStock} load={isLoadingFigures}>
						<CercleContainer>
							<Inventory2Icon fontSize="small" />
						</CercleContainer>
					</MiniCard>

					<MiniCard title="Valeur totale" number={`${value.result/100}€`} load={isLoadingValue}>
						<CercleContainer>
							<EuroIcon fontSize="small" />
						</CercleContainer>
					</MiniCard>
				</Box>

				<Paper elevation={2} sx={(theme) => ({
					...theme.customComponents.pie
				})}>					
					<Pie table={pieData.result} load={isLoadingPieData}/>
				</Paper>

			</Box>
		
			<CollapseComponent title="Ajouter un produit en stock">
				<Form page='stock' mode='create'/>
			</CollapseComponent>

			<Box elevation={1} sx={(theme) => theme.customComponents.section}>
				<Typography variant="h2">
					Les produits en stock
				</Typography>
				<Grid data={gridData} load={isLoadingGridData} />
			</Box>

        </Box>
    );
}