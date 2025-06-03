import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from '@mui/material'
import { useState } from 'react';
import Modal from './Modal'

export default function Action({row}) {
    const [open, setOpen] = useState(false);
	
	const handleEdit = (user) => {
		setOpen(true)
		console.log('Edit', user);
	};

    const handleDelete = (input) => {
        if(confirm("Supprimer l'article "+input.title+" ?")) console.log('Article supprimé, id: ', input.id);
    };

	const handleClose = () => {
		setOpen(false);
	};

    return(
        <>
            <IconButton >
                <EditIcon onClick={() => handleEdit(row)}/>
            </IconButton>
            <IconButton>
                <DeleteIcon onClick={() => handleDelete(row)}/>
            </IconButton>

            <Modal open={open} handleClose={handleClose}/>
        </>
    )
}