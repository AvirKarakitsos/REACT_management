import { Box } from '@mui/material';
import Grid from '../components/tools/Grid'
import {data} from '../utilities/common.js'

export default function Analytic() {
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


            <Grid columns={data.columns} rows={data.rows}/>
                
        </Box>
    );
}