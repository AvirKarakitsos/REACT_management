import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Header() {
  const today = new Date()
  const formatDate = today.getDate()+' '+ today.toLocaleString('default', { month: 'short' })+' '+today.getFullYear()

  return (
    <AppBar
      position="fixed"
      elevation={1}
       sx={{
        backgroundColor: '#fff',
        color: '#000'
       }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={ {marginLeft:'300px'}}>
          Tableau de bord
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1" sx={ {marginRight:2} }>{formatDate}</Typography>
          <Button variant="outlined" color='#8D8D8D' size='small'>
            Se déconnecter
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
