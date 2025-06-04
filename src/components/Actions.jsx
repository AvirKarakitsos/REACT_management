import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from '@mui/material'
import { useEffect, useState } from 'react';
import Modal from './Modal'
import { useLocation } from 'react-router'



export default function Action({row}) {
    let location = useLocation()
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({
        website: null,
        error: null,
        loading: true,
    });
	
	const handleEdit = () => {
		setOpen(true)
	};

    const handleDelete = (input) => {
        if(confirm("Supprimer l'article: "+input.Titre+" ?")) console.log('Article supprimé, id: ', input.id);
    };

	const handleClose = () => {
		setOpen(false);
	};

    useEffect(() => {
        if(location.pathname === "/online") {

            setState({ website: null, error: null, loading: true });
    
            fetch(`http://localhost:4000/api/articles/online/${row.id}`)
            .then((res) => {
                if (!res.ok) {
                throw new Error(`Erreur HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setState({ website: data, error: null, loading: false });
            })
            .catch((err) => {
                setState({ website: null, error: err.message, loading: false });
            })
        }

    },[location.pathname,row.id])


    return(
        <>
            <IconButton >
                <EditIcon onClick={handleEdit}/>
            </IconButton>
            <IconButton>
                <DeleteIcon onClick={() => handleDelete(row)}/>
            </IconButton>

            {!state.loading 
                ? <>
                    {state.website.result.map(item =>(
                        <IconButton key={item.id}>
                            <img src={`/logos${item.logoShort}`} style={ {height:"20px",width:"20px"}}/>
                        </IconButton>)
                    )}
                </>
                : null
            }

            <Modal open={open} handleClose={handleClose} data={row}/>
        </>
    )
}