import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SideBarPass from './components/passager/sidebarpass/sidebarpass';
import SideBarCond from "./components/conducteur/sidebarcond/sidebarcond";
import PropserTrajet from "./components/proposer-un-trajet/proposerTrajet";
import Accueil from './components/accueil/accueil'
import NavMenu from './components/accueil/navbar'
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavMenu/>
      <Route exact path="/" component={Accueil}/>
      <Route exact path="/proposer-un-trajet" component={PropserTrajet}/>
      <Route  path="/passager/profil/" component={SideBarPass}/>
      <Route  path="/conducteur/profil/" component={SideBarCond}/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

