import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from '@mui/material'
import { useContext, useState } from 'react';
import Modal from './Modal'
import { serverUrl } from '../utilities/constants';
import { RefreshContext } from '../utilities/context/RefreshContext';
import Notification from './tools/Notification'


export default function Action({row, websites}) {
    const [open, setOpen] = useState(false)
    const {triggerRefresh} = useContext(RefreshContext)
    const [data, setData] = useState({...row})

    const [snackbar, setSnackbar] = useState({
        isOpen: false,
        status: null,
        message: null
    })
    
	const handleEdit = () => {
        if(row.state === "online") {
            let tabLinks = websites[0].websites.reduce((acc,cur)=> {
                    acc.push(cur.link)
                    return acc
                },[]) 
            let chainedLink = tabLinks.join(";")

            setData(prev =>({...prev, link: chainedLink}))
            setOpen(true)
        } else {
            setOpen(true)
        }

	};

    const handleDelete = (input) => {
        if(confirm("Supprimer l'article: "+input.title+" ?")) {
            fetch(`${serverUrl}/articles/${input.id}`,{method: "DELETE"})
            .then((res) => {
                if (!res.ok) {
                    setSnackbar({
                        isOpen: true, 
                        status: "error", 
                        message:"Erreur lors de la suppression"
                    })
                }
                return res.json();
            })
            .then((input) => {
                setSnackbar({
                    isOpen: true, 
                    status: "success", 
                    message: input.message
                })
                
                setTimeout(() => {
                    triggerRefresh()
                }, "3000");
            })
        } 
    };

	const handleClose = () => {
		setOpen(false);
	};

    return(
        <>
            <Notification snackbar={snackbar} handleSnackbar={setSnackbar}/>
            
            <IconButton >
                <EditIcon onClick={() => handleEdit(row.id)}/>
            </IconButton>
            <IconButton>
                <DeleteIcon onClick={() => handleDelete(row)}/>
            </IconButton>

            {websites.length !== 0 
                ? <>
                    {websites[0].websites.map(item =>(
                        <IconButton key={item.id}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <img src={`/logos${item.logoShort}`} style={ {height:"20px",width:"20px"}}/>
                        </a>
                        </IconButton>)
                    )}
                </>
                : null
            }

            <Modal open={open} handleClose={handleClose} data={data}/>
            
        </>
    )
}