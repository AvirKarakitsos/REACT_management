import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import Form from './tools/Form'
import { whichCategory, whichWebsite } from '../utilities/common';
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
                            id:data.id,
                            title:data.Titre,
                            description:data?.Description || null,
                            price: data.Prix,
                            categoryId: whichCategory(data.Categorie),
                            state: data.Etat,
                            link: data?.link || null,
                            platform: whichWebsite(data?.Site) || null,
                            sold_at: data?.Vendu || null
                        }
                    }
                    handleClose={handleClose}
                    />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Annuler</Button>
            </DialogActions>
        </Dialog>
    )
}