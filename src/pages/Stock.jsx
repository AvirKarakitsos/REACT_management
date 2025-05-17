import { Collapse, Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import Form from '../components/tools/Form'


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
						px: 2,
						paddingTop: 2,
						display: 'flex',
						justifyContent: 'space-between',
						borderRadius: 3,
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
						p: 2,
						border: '1px solid #ccc',
						borderRadius: 2,
						backgroundColor: '#f9f9f9',
					}}
					>
					<Form/>
					</Box>
				</Collapse>
			</Box>


        </Box>
    );
}