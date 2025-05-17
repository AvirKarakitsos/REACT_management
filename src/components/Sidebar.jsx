import { Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

import GridViewIcon from '@mui/icons-material/GridView';
import StoreIcon from '@mui/icons-material/Store';
import ComputerIcon from '@mui/icons-material/Computer';
import BarChartIcon from '@mui/icons-material/BarChart';

const menuData = [
  {
	id: 1,
    title: 'Tableau de bord',
    items: [{
			id: 1 ,
			title: 'Général',
			link: "/",
			icone: <GridViewIcon fontSize='small'/>,
		},
		{ 
			id: 2,
			title:'Stock',
			link: "/stock",
			icone: <StoreIcon fontSize='small'/>
		},
		{ 
			id:3,
			title: 'En Ligne',
			link: "/online",
			icone: <ComputerIcon fontSize='small'/>
		},
		{ 
			id: 4,
			title: 'Analytique',
			link: "/analytic",
			icone: <BarChartIcon fontSize='small'/>
	}]
  },
  {
	id: 2,
    title: 'Ressources',
    items: [{
			id: 1 ,
			title: 'Mondil Relay',
			link: "/stock",
			icone: null
		},
		{ 
			id: 2,
			title:'Le Bazar d\'Avir',
			link: "/stock",
			icone: null
		}]
  },
  {
	id: 3,
    title: 'Plateformes',
    items: [{
			id: 1 ,
			title: 'Vinted',
			link: "https://www.youtube.com/",
			icone: null		
		},
		{ 
			id: 2,
			title:'Rakuten',
			link: "/stock",
			icone: null		
		},
		{ 
			id:3,
			title: 'Leboncoin',
			link: "/stock",
			icone: null		
		},
		{ 
			id: 4,
			title: 'Ebay',
			link: "/stock",
			icone: null
	}]
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
			backgroundColor: 'background.default',
			border: 'none',
			overflow: 'hidden'
			},
		}}
		>
			<Box>
				<Typography sx={ {marginBottom: '30px', fontWeight:'600'}}>Outil de Gestion</Typography>
				
				{menuData.map((section) => (
					<Box key={section.id} sx={{ paddingBottom:'40px', cursor: 'default' }}>

						<Typography sx={ {fontSize:'16px', marginBottom:1, color: 'text.third'} }>
							{section.title}
						</Typography>
						<List disablePadding sx={{px:'10px'}}>
							{section.items.map((content) => (
								<MuiLink key={content.id} component={RouterLink} to={content.link} underline='none' color='text.secondary' target={section.id !== 1 ? "_blank" : null} rel= {section.id !== 1 ? "noopener noreferrer" : null}>
									<ListItem
										onClick={() => !section.id && setSelected(content.title)}  
										sx={{
											display: 'flex',
											alignItems: 'center',
											columnGap: 1,
											borderRadius:'15px',
											color: selected === content.title ? 'text.primary' : 'text.secondary',
											backgroundColor: selected === content.title ? 'secondary.main' : 'background.default',
											'&:hover': {
												color: '#000', 
												backgroundColor: 'secondary.main',
											},
										}}>
										{content.icone}
											<ListItemText primary={content.title} sx={{ cursor: 'default'}}/>
									</ListItem>
								</MuiLink>
							))}
						</List>

					</Box>
					))}
				
			</Box>
		</Drawer>
	);
	}

export default Sidebar