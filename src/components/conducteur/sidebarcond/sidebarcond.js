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
                <div className="side-barcond">
                    <ul className="list">
                        <li className="list-title">Profil</li>
                        <Link to="/"><li>Informations personnelles</li></Link>
                        <Link to="/passager/photocond"><li>Photo</li></Link>
                        <Link to="/passager/preferencescond"><li>Préférences</li></Link>
                        <Link to="/passager/"><li>Véhicule</li></Link>
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
                    <Route exact path="/" component={InfoPersoCond} />
                    <Route exact path="/passager/photocond" component={PhotoCond} />
                    <Route exact path="/passager/preferencescond" component={PreferenceCond} />
                </div>
            </div >

        );
    }
}

export default SideBarCond;