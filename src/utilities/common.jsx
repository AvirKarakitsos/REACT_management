import GridViewIcon from '@mui/icons-material/GridView';
import StoreIcon from '@mui/icons-material/Store';
import ComputerIcon from '@mui/icons-material/Computer';
import BarChartIcon from '@mui/icons-material/BarChart';

export const URI = 'http://localhost:4000'


export const menuData = [
  {
	id: 1,
    title: 'Tableau de bord',
    items: [{
			id: 1 ,
			title: 'Général',
			link: "/",
			icone: <GridViewIcon fontSize='small'/>,
		},
		{ 
			id: 2,
			title:'Stock',
			link: "/stock",
			icone: <StoreIcon fontSize='small'/>
		},
		{ 
			id:3,
			title: 'En Ligne',
			link: "/online",
			icone: <ComputerIcon fontSize='small'/>
		},
		{ 
			id: 4,
			title: 'Analytique',
			link: "/analytic",
			icone: <BarChartIcon fontSize='small'/>
	}]
  },
  {
	id: 2,
    title: 'Ressources',
    items: [{
			id: 1,
			title: 'Mondil Relay',
			link: "/stock",
			icone: null
		},
		{ 
			id: 2,
			title:'Le Bazar d\'Avir',
			link: "/stock",
			icone: null
		}]
  },
  {
	id: 3,
    title: 'Plateformes',
    items: [{
			id: 1,
			title: 'Vinted',
			link: `${URI}/logos/vinted-mini.jpeg`,
			icone: null		
		},
		{ 
			id: 2,
			title:'Rakuten',
			link: "/stock",
			icone: null		
		},
		{ 
			id: 3,
			title: 'Leboncoin',
			link: "/stock",
			icone: null		
		},
		{ 
			id: 4,
			title: 'Ebay',
			link: "/stock",
			icone: null
	}]
  }
];


export const data = {
    columns: [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'firstName', headerName: 'Prénom', width: 150 },
        { field: 'lastName', headerName: 'Nom', width: 150 },
        {
            field: 'age',
            headerName: 'Âge',
            type: 'number',
            width: 110,
        },
    ],
    rows: [
        { id: 1, lastName: 'Durand', firstName: 'Jean', age: 35 },
        { id: 2, lastName: 'Martin', firstName: 'Sophie', age: 42 },
        { id: 3, lastName: 'Bernard', firstName: 'Luc', age: 29 },
        { id: 4, lastName: 'Robert', firstName: 'Claire', age: 30 },
    ]
}
