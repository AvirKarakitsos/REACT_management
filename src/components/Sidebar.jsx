import { Drawer, List, ListItem, ListItemText, Typography, Divider, Box } from '@mui/material';
import { useState } from 'react';

const menuData = [
  {
    title: 'Tableau de bord',
    items: ['Général', 'Stock', 'En Ligne', 'Analytique']
  },
  {
    title: 'Ressources',
    items: ['Le Bazar d\'Avir','Mondial Relay']
  },
  {
    title: 'Plateformes',
    items: ['Vinted','Rakuten', 'Leboncoin', 'Ebay']
  }
];

function Sidebar() {

	const [selected, setSelected] = useState('Général')

	return (
		<Drawer
		variant="permanent"
		anchor="left"
		sx={{
			width: 250, // largeur de la sidebar
			'& .MuiDrawer-paper': {
			width: 250, // largeur appliquée à l'élément visible
			padding: '20px',
			backgroundColor: 'background.paper',
			overflow: 'hidden'
			},
		}}
		>
			<Box>
				<Typography sx={ {marginBottom: '30px', fontWeight:'600'}}>Outil de Gestion</Typography>
				
				{menuData.map((section, idx) => (
				<Box key={idx} sx={{ paddingBottom:'40px', cursor: 'default' }}>
					<Typography sx={ {fontSize:'16px', marginBottom:1, color: 'text.third'} }>
					{section.title}
					</Typography>
					<List disablePadding sx={{px:'10px'}}>
					{section.items.map((text, i) => (
						<ListItem key={i}
						onClick={() => setSelected(text)}  
						sx={{
							borderRadius:'15px',
							color: selected === text ? 'text.primary' : 'text.secondary',
							backgroundColor: selected === text ? 'secondary.main' : 'background.paper',
							'&:hover': {
								color: '#000', 
								backgroundColor: 'secondary.main',
							},
						}}>
							<ListItemText primary={text} sx={{ cursor: 'default'}}/>
						</ListItem>
					))}
					</List>
				</Box>
				))}
				
			</Box>
		</Drawer>
	);
	}

export default Sidebar