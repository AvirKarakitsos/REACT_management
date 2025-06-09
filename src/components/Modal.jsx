import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import Form from './tools/Form'
import { whichCategory, whichWebsite } from '../utilities/common';
import { useLocation } from 'react-router'

export default function Modal({open, handleClose, data}) {
    let location = useLocation()
    let defautlValues = {
        ...data,
        platform: whichWebsite(data.platform),
        categoryId: whichCategory(data.categoryId)
    }

    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Modifier l'article</DialogTitle>
            <DialogContent>
                <Form 
                    page={location.pathname.split('/')[1]}
                    mode='edit' 
                    defaultValues={defautlValues}
                    handleClose={handleClose}
                    />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Annuler</Button>
            </DialogActions>
        </Dialog>
    )
}