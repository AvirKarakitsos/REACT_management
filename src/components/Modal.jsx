import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import Form from './tools/Form'
import { whichCategory } from '../utilities/common';
import { useLocation } from 'react-router'

export default function Modal({open, handleClose, data}) {
    let location = useLocation()

    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Modifier l'article</DialogTitle>
            <DialogContent>
                <Form 
                    page={location.pathname.split('/')[1]}
                    mode='edit' 
                    defaultValues={
                        {
                            title:data.Titre,
                            description:data?.Description,
                            price: data.Prix,
                            category: whichCategory(data.Categorie)
                        }
                    }/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Annuler</Button>
            </DialogActions>
        </Dialog>
    )
}