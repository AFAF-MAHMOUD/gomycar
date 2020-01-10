import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import SideBarPass from './components/passager/sidebarpass/sidebarpass';
import SideBarCond from "./components/conducteur/sidebarcond/sidebarcond";

import  Recherchetrajet from "./components/Recherchertrajet/Recherchetrajet";
import  Trajet from "./components/Recherchertrajet/trajet";
import  Details from "./components/Recherchertrajet/Details";


import './App.css';


function App() {
  return (

    <BrowserRouter>
    
    <div className="App">
      <SideBarPass/>
      <SideBarCond />
      <Route exact path="/recherchetrajet" component={Recherchetrajet}/>
      <Route exact path="/trajet" component={Trajet}/>
      <Route exact path="/details" component={Details}/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

