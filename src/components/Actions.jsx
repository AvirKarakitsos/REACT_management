import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from '@mui/material'
import { useState } from 'react';
import Modal from './Modal'

export default function Action({row}) {
    const [open, setOpen] = useState(false);
	
	const handleEdit = () => {
		setOpen(true)
	};

    const handleDelete = (input) => {
        if(confirm("Supprimer l'article: "+input.Titre+" ?")) console.log('Article supprimé, id: ', input.id);
    };

	const handleClose = () => {
		setOpen(false);
	};

    return(
        <>
            <IconButton >
                <EditIcon onClick={handleEdit}/>
            </IconButton>
            <IconButton>
                <DeleteIcon onClick={() => handleDelete(row)}/>
            </IconButton>

            <Modal open={open} handleClose={handleClose} data={row}/>
        </>
    )
}