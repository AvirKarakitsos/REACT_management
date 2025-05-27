import { Box, Typography, Paper } from '@mui/material';
import Form from '../components/tools/Form'
import CollapseComponent from '../components/tools/Collapse'
import Grid from '../components/tools/Grid'
import MiniCard from '../components/tools/MiniCard'
import CercleContainer from '../components/tools/CercleContainer'
import LaptopIcon from '@mui/icons-material/Laptop';
import Pie from '../components/tools/Pie'
import { pieData} from '../utilities/common.jsx'


export default function Online() {
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
                <MiniCard title="Produits en ligne" number='5'>
                    <CercleContainer>
                        <LaptopIcon fontSize="small" />
                    </CercleContainer>
                </MiniCard>

                <Paper elevation={2} sx={(theme) => ({
                    ...theme.customComponents.section,
                
                })}>					
                    <Pie table={pieData}/>
                </Paper>
            </Box>
		
			<CollapseComponent title="Ajouter un produit en ligne">
				<Form page='online'/>
			</CollapseComponent>

            <Box elevation={1} sx={(theme) => theme.customComponents.section}>
                <Typography variant="h2">
                    Les produits en ligne
                </Typography>
                <Grid page='online'/>
            </Box>

        </Box>
    );
}