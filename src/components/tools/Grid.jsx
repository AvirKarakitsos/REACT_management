import { DataGrid } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import Actions from '../Actions'
import { useLocation } from 'react-router'

export default function Grid({data, load}) {
	let location = useLocation()

	if(!load) {
		const newColumns = [
			...data.columns,
			{
				field: 'actions',
				headerName: 'Actions',
				width: 400,
				sortable: false,
				renderCell: (params) => <Actions row={params.row} websites={data.websites.filter(item => item.id === params.row.id)} />
			}
		];
		return (
			<div style={{ height: 400, width: '100%' }}>
				{location.pathname === '/' 
					? <DataGrid
						pageSize={5}
						rowsPerPageOptions={[5]}
						rows={data.rows}
						columns={data.columns}
					/>
					: <DataGrid
						pageSize={5}
						rowsPerPageOptions={[5]}
						rows={data.rows}
						columns={newColumns}
					/>
				}
			</div>
		)
	} else return (<CircularProgress/>)

}

