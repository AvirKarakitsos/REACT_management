import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';


export default function Grid( {rows, columns } ) {
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
