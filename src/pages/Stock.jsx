import { Collapse, Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import Form from '../components/tools/Form'
import Grid from '../components/tools/Grid'
import {data} from '../utilities/common.js'


export default function Stock() {
	const [open, setOpen] = useState(false);

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
		
			<Box>
				<Box 
					elevation={2}
					sx={{
						px: 4,
						paddingTop: 2,
						m: 4,
						display: 'flex',
						justifyContent: 'space-between',
						borderRadius: 2,
						backgroundColor: 'background.default',
						cursor: 'pointer'
					}}
					onClick={() => setOpen((prev) => !prev)}
				>
					<Typography variant='h2'>Ajouter un produit</Typography>
					<ArrowBackIosIcon 
						fontSize='medium'
						 sx={{
							transition: 'transform 1s ease',
							transform: open ? 'rotate(-90deg)' : 'rotate(0deg)',
						 }}
					/>
				</Box>

				<Collapse in={open}>
					<Box
						sx={{
							p: 4,
							mx: 4,
							borderRadius: 2,
							backgroundColor: '#fff',
						}}
					>
					<Form/>
					</Box>
				</Collapse>
			</Box>

			<Box elevation={1} sx={(theme) => theme.customComponents.section}>
				<Typography variant="h2">
					Les produits en stocks
				</Typography>
				<Grid columns={data.columns} rows={data.rows}/>
			</Box>


        </Box>
    );
}