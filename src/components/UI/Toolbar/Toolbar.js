import React from 'react';
import './Toolbar.css';
import Logo from '../../Layout/Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';
const toolbar =(props)=>(
    <header className="Toolbar">
        <DrawerToggle clicked ={props.drawerToggleClicked}  />
        <Logo/>
        <nav className="DesktopOnly">
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);
export default toolbar;