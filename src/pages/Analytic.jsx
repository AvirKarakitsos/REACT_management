import Grid from '../components/tools/Grid'
import Bar from '../components/tools/Bar'
import {gridData, barData2} from '../utilities/common.jsx'
import { Box, Typography, Paper } from '@mui/material';

export default function Analytic() {
    
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
                    width: '50%',
                    borderRadius: 2
                })}>
                
                <Bar table={barData2}/>

            </Paper>


            <Box elevation={1} sx={(theme) => theme.customComponents.section}>
				<Typography variant="h2">
					Les produits vendus
				</Typography>
                <Grid columns={gridData.columns} rows={gridData.rows}/>
            </Box>
                
        </Box>
    );
}