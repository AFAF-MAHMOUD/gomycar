import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./sidebarcond.css";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import InfoPersoCond from '../informationPersocond';
import PhotoCond from "../photocond";
import PreferenceCond from "../preferencescond";

class SideBarCond extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (


            <div className="aside-bar">
                <ul className="list">
                    <li className="list-title">Profil</li>
                    <Link to="/passager/informationPerso"><li>Informations personnelles</li></Link>
                    <a href="#"><li>Photo</li></a>
                    <a href="#"><li>Préférences</li></a>
                    <a href="#"><li>Véhicule</li></a>
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
                <Route exact path ="/passager/informationPerso" component={InfoPersoCond}/>
                <PhotoCond />
                <PreferenceCond />


            </div>

        );
    }
}

export default SideBarCond;