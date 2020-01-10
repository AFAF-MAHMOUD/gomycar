import React, { Component } from 'react';
import "./sidebarcond.css";
import { Route, Link } from 'react-router-dom';
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
                <div className="side-barcond">
                    <ul className="list">
                        <li className="list-title">Profil</li>
                        <Link to="/conducteur/profil/infoperso"><li>Informations personnelles</li></Link>
                        <Link to="/conducteur/profil/photocond"><li>Photo</li></Link>
                        <Link to="/conducteur/profil/preferencescond"><li>Préférences</li></Link>
                        <Link to="/conducteur/profil/vehicule"><li>Véhicule</li></Link>
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
                </div>
                <div className="side-link">
                    <Route  exact path="/conducteur/profil/infoperso" component={InfoPersoCond} />
                    <Route  exact path="/conducteur/profil/" component={InfoPersoCond} />
                    <Route  path="/conducteur/profil/photocond" component={PhotoCond} />
                    <Route  path="/conducteur/profil/preferencescond" component={PreferenceCond} />
                </div>
            </div >

        );
    }
}

export default SideBarCond;