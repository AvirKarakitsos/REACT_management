import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import Modal from './Modal'
import { useLocation } from 'react-router'
import { serverUrl } from '../utilities/constants';
import { RefreshContext } from '../utilities/context/RefreshContext';



export default function Action({row}) {
    let location = useLocation()
    const [open, setOpen] = useState(false)
    const {triggerRefresh} = useContext(RefreshContext)
    const [website, setWebsite] = useState({
        data: null,
        error: null,
        loading: true,
    });
    const [links, setLinks] = useState({
        data: null,
        error: null,
        loading: true,
    });
	
	const handleEdit = (id) => {
        if(location.pathname === "/online") {
            setLinks({ data: null, error: null, loading: true });
            
            fetch(`${serverUrl}/articles/online/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Erreur HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then((input) => {
                let tabLinks = input.result.reduce((acc,cur)=> {
                    acc.push(cur.link)
                    return acc
                },[]) 
                let chainedLink = tabLinks.join(";")
                let resLinks = {
                    ...row,
                    link: chainedLink
                }

                setLinks({ data: resLinks, error: null, loading: false });
                setOpen(true)
            })
            .catch((err) => {
                setLinks({ data: null, error: err.message, loading: false });
            })
        } else {
            setOpen(true)
        }

	};

    const handleDelete = (input) => {
        if(confirm("Supprimer l'article: "+input.Titre+" ?")) {
            fetch(`${serverUrl}/articles/${input.id}`,{method: "DELETE"})
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Erreur HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then((input) => {
                console.log(input)
                triggerRefresh()
            })
        } 
    };

	const handleClose = () => {
		setOpen(false);
	};

    useEffect(() => {
        if(location.pathname === "/online") {

            setWebsite({ data: null, error: null, loading: true });
    
            fetch(`http://localhost:4000/api/articles/online/${row.id}`)
            .then((res) => {
                if (!res.ok) {
                throw new Error(`Erreur HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then((input) => {
                setWebsite({ data: input, error: null, loading: false });
            })
            .catch((err) => {
                setWebsite({ data: null, error: err.message, loading: false });
            })
        }

    },[location.pathname,row.id])


    return(
        <>
            <IconButton >
                <EditIcon onClick={() => handleEdit(row.id)}/>
            </IconButton>
            <IconButton>
                <DeleteIcon onClick={() => handleDelete(row)}/>
            </IconButton>

            {!website.loading 
                ? <>
                    {website.data.result.map(item =>(
                        <IconButton key={item.id}>
                            <img src={`/logos${item.logoShort}`} style={ {height:"20px",width:"20px"}}/>
                        </IconButton>)
                    )}
                </>
                : null
            }

            <Modal open={open} handleClose={handleClose} data={!links.loading ? links.data : row}/>
            
        </>
    )
}