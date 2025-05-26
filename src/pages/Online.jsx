import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Typography } from '@mui/material';
import Form from '../components/tools/Form'
import CollapseComponent from '../components/tools/Collapse'
import Grid from '../components/tools/Grid'
import UploadFileIcon from '@mui/icons-material/UploadFile';

export default function Online() {
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
		
			<CollapseComponent title="Ajouter un produit en ligne">
				<Form>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Veuillez faire un choix :</FormLabel>
                        <RadioGroup
                        aria-label="choix"
                        name="choix"
                        value=""
                        sx={ {display: 'flex', gap: 1} }
                        >
                            <Box  sx={ {display: 'flex', columnGap: 4} }>
                                <FormControlLabel value="choix1" control={<Radio />} label="Choix 1" />
                                <FormControlLabel value="choix2" control={<Radio />} label="Choix 2" />
                            </Box>
                            <Box  sx={ {display: 'flex', columnGap: 4} }>
                                <FormControlLabel value="choix3" control={<Radio />} label="Choix 3" />
                                <FormControlLabel value="choix4" control={<Radio />} label="Choix 4" />
                            </Box>
                        </RadioGroup>
                    </FormControl>

                    <Box sx={{ mt: 3 }}>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="upload-image"
                            type="file"
                        />
                        <label htmlFor="upload-image">
                            <Button variant="contained" component="span" startIcon={<UploadFileIcon />}>
                            Ajouter une image
                            </Button>
                        </label>

                        <Typography variant="body2" sx={{ mt: 1 }}>
                        Fichier sélectionné
                        </Typography>
                    </Box>

                </Form>
			</CollapseComponent>

            <Box elevation={1} sx={(theme) => theme.customComponents.section}>
                <Typography variant="h2">
                    Les produits en ligne
                </Typography>
                <Grid page='online'/>
            </Box>

        </Box>
    );
}