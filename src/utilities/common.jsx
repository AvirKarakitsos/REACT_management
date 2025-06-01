import GridViewIcon from '@mui/icons-material/GridView';
import StoreIcon from '@mui/icons-material/Store';
import ComputerIcon from '@mui/icons-material/Computer';
import BarChartIcon from '@mui/icons-material/BarChart';

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


export function grid(data) {
	const columns = []

	const first = data.result[0]
	
	for(let key in first) {
		let element = {
			field: key,
			headerName: key
		}
		columns.push(element)
	}

	return {columns, rows: data.result}
}
