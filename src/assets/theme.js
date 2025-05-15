// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
		main: '#1e90ff',
		},
		secondary: {
		main: '#EBEDEE',
		},
		background: {
		default: '#fff',
		paper: '#FAFAFA',
		},
		text: {
		primary: '#000',
		secondary: '#8D8D8D',
		third: '#cccccc'
		},
		custom: {
		grey: '#EBEDEE',
		},
	},

	typography: {
		h2: {
		fontSize: 17,
		fontWeight: 600,
		marginBottom: 40,
		},
	},
});

export default theme;
