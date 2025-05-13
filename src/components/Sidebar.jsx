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

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 250, // largeur de la sidebar
        '& .MuiDrawer-paper': {
        width: 250, // largeur appliquée à l'élément visible
        padding: '20px',
        backgroundColor: '#F9F9F9',
        boxSizing: 'border-box',
        },
    }}
    >
      <Box>
         <Typography sx={ {marginBottom: '30px', fontWeight:'600'}}>Outil de Gestion</Typography>
        {menuData.map((section, idx) => (
          <Box key={idx} sx={{ paddingBottom:'40px',color: '#8D8D8D', cursor: 'default' }}>
            <Typography sx={ {fontSize:'15px', marginBottom:1} }>
              {section.title}
            </Typography>
            <List disablePadding sx={{px:'10px'}}>
              {section.items.map((text, i) => (
                <ListItem key={i}   sx={{
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

export default Sidebar