import React from 'react';
import "./Logo.css";
import burgerLogo from '../../../assets/Images/BurgerLogo.png';
import { NavLink } from 'react-router-dom';

const logo = (props) =>(
    <div className="Logo">
        <NavLink
            to="/"
            activeClassName="active"
            exact>
                <img src={burgerLogo} alt="Burger"></img>
        </NavLink>
        
    </div>
);
export default logo;