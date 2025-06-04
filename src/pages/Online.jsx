import { Box, Typography, Paper } from '@mui/material';
import Form from '../components/tools/Form'
import CollapseComponent from '../components/tools/Collapse'
import Grid from '../components/tools/Grid'
import MiniCard from '../components/tools/MiniCard'
import CercleContainer from '../components/tools/CercleContainer'
import LaptopIcon from '@mui/icons-material/Laptop';
import Pie from '../components/tools/Pie'
import { useFetch } from '../utilities/useFetch.jsx';
import {serverUrl} from '../utilities/constants.js'


export default function Online() {
    const { table: figures, load: isLoadingFigures } = useFetch(`${serverUrl}/articles/all/figures`)
    const { table: pieData, load: isLoadingPieData } = useFetch(`${serverUrl}/articles/categories/online`)
	const { table: gridData, load: isLoadingGridData } = useFetch(`${serverUrl}/articles/online`)

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
                <MiniCard title="Produits en ligne" number={figures.numberOnline} load={isLoadingFigures}>
                    <CercleContainer>
                        <LaptopIcon fontSize="small" />
                    </CercleContainer>
                </MiniCard>

                <Paper elevation={2} sx={(theme) => ({
                    ...theme.customComponents.section,
                
                })}>					
                    <Pie table={pieData.result} load={isLoadingPieData}/>
                </Paper>
            </Box>
		
			<CollapseComponent title="Ajouter un produit en ligne">
				<Form page='online' mode='create'/>
			</CollapseComponent>

            <Box elevation={1} sx={(theme) => theme.customComponents.section}>
                <Typography variant="h2">
                    Les produits en ligne
                </Typography>
                <Grid data={gridData} load={isLoadingGridData} />
            </Box>

        </Box>
    );
}