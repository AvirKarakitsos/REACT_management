import { Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { menuData } from '../utilities/common';

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
											onClick={() => section.id === 1 && setSelected(content.title)}  
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
											}}	
										>
										{content.icone}
										<ListItemText primary={content.title} sx={{ cursor: 'pointer'}}/>
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