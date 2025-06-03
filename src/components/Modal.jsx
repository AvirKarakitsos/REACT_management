import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';


export default function Form({open, handleClose}) {
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Modifier l'article</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="nom"
                    label="Nom"
                    value=''
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="prenom"
                    label="Prénom"
                    value=''
                    fullWidth
                    />
                <TextField
                    margin="dense"
                    name="age"
                    label="Âge"
                    type="number"
                    value=''
                    fullWidth
                    />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Annuler</Button>
                <Button variant="contained">Enregistrer</Button>
            </DialogActions>
        </Dialog>
    )
}