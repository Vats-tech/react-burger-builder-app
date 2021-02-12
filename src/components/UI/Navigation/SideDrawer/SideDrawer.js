import React from 'react';
import './SideDrawer.css';

import Logo from '../../../Layout/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../Backdrop/Backdrop';
import Aux from '../../../../hoc/Auxillary/auxillary';
const sideDrawer = (props) =>{
    let attachClasses = ["SideDrawer","Close"];
    if(props.open){
        attachClasses=["SideDrawer","Open"];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
                <div className={attachClasses.join(' ')} onClick={props.closed}>
                    <div style={{width:'150px',height:'50px',textAlign:'left'}}>
                    <Logo></Logo> 
                    </div>
                    <nav>
                        <NavigationItems isAuthenticated={props.isAuth}/>
                    </nav>
                </div>
            
        </Aux>
        
    );
}
export default sideDrawer;