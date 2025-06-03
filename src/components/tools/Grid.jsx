import { DataGrid } from '@mui/x-data-grid';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CircularProgress from '@mui/material/CircularProgress';
import Actions from '../Actions'

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

export default function Grid({data, load}) {

	if(!load) {
		const newColumns = [
			...data.columns,
			{
				field: 'actions',
				headerName: 'Actions',
				width: 400,
				sortable: false,
				renderCell: (params) => <Actions row={params.row}/>
			}
		];
		return (
			<div style={{ height: 400, width: '100%' }}>
				<DataGrid
					pageSize={5}
					rowsPerPageOptions={[5]}
					rows={data.rows}
					columns={newColumns}
				/>
			</div>
		)
	} else return (<CircularProgress/>)

}

