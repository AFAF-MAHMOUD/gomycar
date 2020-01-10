import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './navbar.css'
class NavMenu extends Component {
    render() { 
        return ( 
            <header>
                <div className='main-menu-container'>
                    <div className="Logo-container">
                        <img src="./logo.PNG" alt='logo'/>
                    </div>
                    <div className="navbar">
                        <nav>
                        <NavLink to="/chercher-un-trajet"><li>Chercher un trajet</li></NavLink>
                        <NavLink to="/proposer-un-trajet"><li>Proposer un trajet</li></NavLink>
                        <NavLink to="/inscription"><li>S'inscrire</li></NavLink>
                        <NavLink to="/connexion"><li>Se connecter</li></NavLink>
                        </nav>
                    </div>
                </div>
            </header>
         );
    }
}
 
export default NavMenu;
