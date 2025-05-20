import { Box } from '@mui/material';
import Form from '../components/tools/Form'
import CollapseComponent from '../components/tools/Collapse'

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
		
			<CollapseComponent title="Ajouter un produit en ligne">
				<Form/>
			</CollapseComponent>

        </Box>
    );
}