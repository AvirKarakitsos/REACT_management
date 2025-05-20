import { Box, Typography } from '@mui/material';
import Form from '../components/tools/Form'
import CollapseComponent from '../components/tools/Collapse'
import Grid from '../components/tools/Grid'
import {data} from '../utilities/common.js'


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
		
			<CollapseComponent title="Ajouter un produit en stock">
				<Form/>
			</CollapseComponent>

			<Box elevation={1} sx={(theme) => theme.customComponents.section}>
				<Typography variant="h2">
					Les produits en stocks
				</Typography>
				<Grid columns={data.columns} rows={data.rows}/>
			</Box>


        </Box>
    );
}