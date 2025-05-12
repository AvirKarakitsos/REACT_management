import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography, Divider, Box } from '@mui/material';

const menuData = [
  {
    title: 'Tableau de bord',
    items: ['Stock', 'En Ligne', 'Analytique']
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

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
	  sx={{
		width: 250, // largeur de la sidebar
		'& .MuiDrawer-paper': {
		width: 250, // largeur appliquée à l'élément visible
		paddingTop: '50px',
		backgroundColor: '#F9F9F9',
		boxSizing: 'border-box',
		},
  	}}
    >
      <Box>
        {menuData.map((section, idx) => (
          <Box key={idx} sx={{ px: '20px', paddingBottom:'40px',color: '#8D8D8D', cursor: 'default' }}>
            <Typography gutterBottom sx={ {fontSize:'15px'} }>
              {section.title}
            </Typography>
            <List disablePadding sx={{px:'10px'}}>
              {section.items.map((text, i) => (
                <ListItem button key={i}   sx={{
					borderRadius:'15px',
					'&:hover': {
						color: '#000', 
						backgroundColor: '#EBEDEE',
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

