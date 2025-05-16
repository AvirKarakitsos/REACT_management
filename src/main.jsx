import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./assets/theme.js"

import Layout from './components/Layout.jsx'
import Overview from './pages/Overview.jsx'
import Stock from './pages/Stock.jsx'
import Online from './pages/Online.jsx'
import Analytic from './pages/Analytic.jsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
		{ index: true, element: <Overview /> },
		{ path: '/stock', element: <Stock /> },
		{ path: '/online', element: <Online /> },
		{ path: '/analytic', element: <Analytic /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			 <RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>,
)
