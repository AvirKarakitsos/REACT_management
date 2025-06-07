import { Outlet } from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar'
import { RefreshProvider } from '../utilities/context/RefreshProvider';

export default function Layout() {
    return (
        <RefreshProvider>
            <Header/>
            <Sidebar/>
            
            <Outlet/>
        </RefreshProvider>
    );
}
