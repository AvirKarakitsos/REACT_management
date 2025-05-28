import { Box, Typography, Paper } from '@mui/material';
import Form from '../components/tools/Form'
import CollapseComponent from '../components/tools/Collapse'
import Pie from '../components/tools/Pie'
import Grid from '../components/tools/Grid'
import MiniCard from '../components/tools/MiniCard'
import CercleContainer from '../components/tools/CercleContainer'
import { pieData} from '../utilities/common.jsx'
import Inventory2Icon from '@mui/icons-material/Inventory2';


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

				<Paper elevation={2} sx={(theme) => ({
					...theme.customComponents.section
				})}>					
					<Pie table={pieData}/>
				</Paper>

			</Box>
		
			<CollapseComponent title="Ajouter un produit en stock">
				<Form page='stock'/>
			</CollapseComponent>

			<Box elevation={1} sx={(theme) => theme.customComponents.section}>
				<Typography variant="h2">
					Les produits en stock
				</Typography>
				<Grid page='stock' />
			</Box>


        </Box>
    );
}