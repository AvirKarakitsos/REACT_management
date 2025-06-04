import Grid from '../components/tools/Grid'
import Bar from '../components/tools/Bar'
import { Box, Typography, Paper } from '@mui/material';
import Form from '../components/tools/Form'
import CollapseComponent from '../components/tools/Collapse'
import {serverUrl} from '../utilities/constants.js'
import { useFetch } from '../utilities/useFetch.jsx';


export default function Analytic() {
    const { table: barData, load: isLoadingBarData } = useFetch(`${serverUrl}/articles/sold/monthly`)
    const { table: gridData, load: isLoadingGridData } = useFetch(`${serverUrl}/articles/sold`)
  
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

            <Paper elevation={2} sx={(theme) => ({
                    ...theme.customComponents.section,
                    height:'400px',
                    borderRadius: 2
                })}>
                
                <Bar table={barData} load={isLoadingBarData}/>

            </Paper>

            <CollapseComponent title="Indiquer un article comme vendu">
                <Form page='sold' mode='create'/>
            </CollapseComponent>
            


            <Box elevation={1} sx={(theme) => theme.customComponents.section}>
				<Typography variant="h2">
					Les produits vendus
				</Typography>
                <Grid data={gridData} load={isLoadingGridData}/>
            </Box>
                
        </Box>
    );
}