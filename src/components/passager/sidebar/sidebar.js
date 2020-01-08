import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import sidebar from "./sidebar.css";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import InfoPerso from '../informationPerso';
import Photo from "../photo";
import Preference from "../preferences";

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (


            <div className="aside-bar">
                <ul className="list">
                    <li className="list-title">Profil</li>
                    <NavLink to="../passager/informationPerso.js"><li>Informations personnelles</li></NavLink>
                    <a href="#"><li>Photo</li></a>
                    <a href="#"><li>Préférences</li></a>
                    
                </ul>
                <ul className="list">
                    <li className="list-title">Avis</li>
                    <a href="#"><li>Avis reçus</li></a>
                    <a href="#"><li>Avis laissés</li></a>
                </ul>
                <ul className="list">
                    <li className="list-title">Compte</li>
                    <a href="#"><li>Mot de passe </li></a>
                    <a href="#"><li>Fermeture de compte</li></a>
                </ul>
                <InfoPerso />
                <Photo />
                <Preference />


            </div>

        );
    }
}

export default SideBar;