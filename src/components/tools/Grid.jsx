import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'Prénom', width: 150 },
  { field: 'lastName', headerName: 'Nom', width: 150 },
  {
    field: 'age',
    headerName: 'Âge',
    type: 'number',
    width: 110,
  },
];

const rows = [
  { id: 1, lastName: 'Durand', firstName: 'Jean', age: 35 },
  { id: 2, lastName: 'Martin', firstName: 'Sophie', age: 42 },
  { id: 3, lastName: 'Bernard', firstName: 'Luc', age: 29 },
  { id: 4, lastName: 'Robert', firstName: 'Claire', age: 30 },
];

export default function Grid() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}
