import Grid from '../components/tools/Grid'
import Bar from '../components/tools/Bar'
import { barData2} from '../utilities/common.jsx'
import { Box, Typography, Paper } from '@mui/material';
import Form from '../components/tools/Form'
import CollapseComponent from '../components/tools/Collapse'


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

            <CollapseComponent title="Indiquer un article comme vendu">
                <Form page='sold'/>
            </CollapseComponent>
            


            <Box elevation={1} sx={(theme) => theme.customComponents.section}>
				<Typography variant="h2">
					Les produits vendus
				</Typography>
                <Grid page='analytic'/>
            </Box>
                
        </Box>
    );
}