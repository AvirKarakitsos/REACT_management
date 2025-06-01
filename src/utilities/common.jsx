import GridViewIcon from '@mui/icons-material/GridView';
import StoreIcon from '@mui/icons-material/Store';
import ComputerIcon from '@mui/icons-material/Computer';
import BarChartIcon from '@mui/icons-material/BarChart';

export const pieData = [
	{ id: 0, value: 10, label: 'series A' },
	{ id: 1, value: 15, label: 'series B' },
	{ id: 2, value: 20, label: 'series C' },
] 

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
			title: 'Mondial Relay',
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
			link: 'https://www.vinted.fr/member/239162131',
			icone: <img src='/logos/vinted-mini.jpeg' height='20px' width='20px'/>		
		},
		{ 
			id: 2,
			title:'Rakuten',
			link: "https://fr.shopping.rakuten.com/",
			icone: <img src='/logos/rakuten-mini.svg' height='20px' width='20px'/>		
		},
		{ 
			id: 3,
			title: 'Leboncoin',
			link: "https://www.leboncoin.fr/",
			icone: <img src='/logos/leboncoin-mini.png' height='20px' width='20px'/>		
		},
		{ 
			id: 4,
			title: 'Ebay',
			link: "https://www.ebay.fr/",
			icone: <img src='/logos/ebay-mini.png' height='20px' width='20px'/>
	}]
  }
];



export const gridData = {
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
