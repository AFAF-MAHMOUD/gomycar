import React, { Component } from 'react';
import "./sidebarpass.css";
import { Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import InfoPersoPass from '../informationPersopass';
import PhotoPass from "../photopass";
import PreferencePass from "../preferencespass";

class SideBarPass extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (


            <div className="aside-barpassager">
                <div className="aside">
                    <ul className="list">
                        <li className="list-title">Profil</li>
                        <Link to="/passager/profil/infoperso"><li>Informations personnelles</li></Link>
                        <Link to="/passager/profil/photopass"><li>Photo</li></Link>
                        <Link to="/passager/profil/preferencespass"><li>Préférences</li></Link>
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
                <div className="aside-link">
                    <Route  exact path="/passager/profil/" component={InfoPersoPass} />
                    <Route  exact path="/passager/profil/infoperso" component={InfoPersoPass} />
                    <Route  path="/passager/profil/photopass" component={PhotoPass} />
                    <Route  path="/passager/profil/preferencespass" component={PreferencePass} />
                </div>

            </div>

        );
    }
}

export default SideBarPass;