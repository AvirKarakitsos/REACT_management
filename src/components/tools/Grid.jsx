import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Dialog,  DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ForwardIcon from '@mui/icons-material/Forward';
import { useState } from 'react';

const handleDelete = (id) => {
	confirm("Supprimer l'article "+id+" ?")
	console.log('Delete user with id', id);
};

const handleState = (id) => {
	confirm("Etes vous sûr d'envoyer l'article "+id+" en ligne ?")
	console.log('User State user with id', id);
}; 



export default function UserTable() {
	//const [users, setUsers] = useState(initialUsers);
	const [open, setOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	const rows = [
		{ id: 1, nom: 'Dupont', prenom: 'Jean', age: 34 },
		{ id: 2, nom: 'Martin', prenom: 'Claire', age: 28 },
		// ...
	];

	const columns = [
	  { field: 'id', headerName: 'ID', width: 90 },
	  { field: 'nom', headerName: 'Nom', width: 150 },
	  { field: 'prenom', headerName: 'Prénom', width: 150 },
	  { field: 'age', headerName: 'Âge', type: 'number', width: 110 },
	  {
		field: 'actions',
		headerName: 'Actions',
		width: 200,
		sortable: false,
		renderCell: (params) => (
		  <>
			<IconButton onClick={() => handleEdit(params.row)}>
			  <EditIcon />
			</IconButton>
			<IconButton onClick={() => handleDelete(params.row.id)}>
			  <DeleteIcon />
			</IconButton>
			<IconButton onClick={() => handleState(params.row.id)}>
			  <ForwardIcon />
			</IconButton>
		  </>
		),
	  },
	];
	
	const handleEdit = (user) => {
		setOpen(true)
	  	console.log('Edit', user);
	};
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

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
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
}

