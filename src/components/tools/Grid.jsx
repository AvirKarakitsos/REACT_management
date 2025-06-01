import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Dialog,  DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

// const handleDelete = (id) => {
// 	if(confirm("Supprimer l'article "+id+" ?")) console.log('Delete user with id', id);
// };

// const handleState = (id, state, arrow) => {
// 	switch(state) {
// 		case 'stock':
// 			if(arrow === 'r') {
// 				if(confirm("Etes vous sûr d'envoyer l'article "+id+" en ligne?")) console.log('User State user with id', id)
// 			} else if(arrow === 'rr') {
// 				if(confirm("Etes vous sûr de marquer l'article "+id+" comme vendu ?")) console.log('User State user with id', id);
// 			}
// 			break;
// 		case 'online':  
// 			if(arrow === 'r') {
// 					if(confirm("Etes vous sûr de marquer l'article "+id+" comme vendu ?")) console.log('User State user with id', id);
// 				} else if(arrow === 'l'){
// 					if(confirm("Etes vous d'envoyer l'article "+id+" en stock ?")) console.log('User State user with id', id);
// 				}
// 			break;
// 			case 'analytic':  
// 			if(arrow === 'l') {
// 				if(confirm("Etes vous d'envoyer l'article "+id+" en ligne ?")) console.log('User State user with id', id);
// 			} else if(arrow === 'll'){
// 				if(confirm("Etes vous d'envoyer l'article "+id+" en stock ?")) console.log('User State user with id', id);
// 			}
// 			break;
// 		default: break;
// 	}
// }; 



export default function UserTable({ data, load}) {
	//const [users, setUsers] = useState(initialUsers);
	const [open, setOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);
	
	// const handleEdit = (user) => {
	// 	setOpen(true)
	// 	  console.log('Edit', user);
	// };
	const handleClose = () => {
		setOpen(false);
		setSelectedUser(null);
	};

//   const handleSave = () => {
//     setUsers((prev) =>
//       prev.map((u) => (u.id === selectedUser.id ? selectedUser : u))
//     );
//     handleClose();
//   };

  const handleChange = (e) => {
	const { name, value } = e.target;
	setSelectedUser((prev) => ({
	...prev,
	[name]: name === 'age' ? Number(value) : value,
	}));
  };

	if(!load) return (
		<div style={{ height: 400, width: '100%' }}>
		<DataGrid
			rows={data.rows}
			columns={data.columns}
			pageSize={5}
			rowsPerPageOptions={[5]}
		/>

		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Modifier l'utilisateur</DialogTitle>
			<DialogContent>
			<TextField
				autoFocus
				margin="dense"
				name="nom"
				label="Nom"
				value={selectedUser?.nom || ''}
				onChange={handleChange}
				fullWidth
			/>
			<TextField
				margin="dense"
				name="prenom"
				label="Prénom"
				value={selectedUser?.prenom || ''}
				onChange={handleChange}
				fullWidth
			/>
			<TextField
				margin="dense"
				name="age"
				label="Âge"
				type="number"
				value={selectedUser?.age || ''}
				onChange={handleChange}
				fullWidth
			/>
			</DialogContent>
			<DialogActions>
			<Button onClick={handleClose}>Annuler</Button>
			<Button variant="contained">Enregistrer</Button>
			</DialogActions>
		</Dialog>


		</div>
	);
  	else return (<CircularProgress/>)
}

