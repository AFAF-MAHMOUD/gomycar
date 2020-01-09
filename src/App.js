import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import SideBarPass from './components/passager/sidebarpass/sidebarpass';
import SideBarCond from "./components/conducteur/sidebarcond/sidebarcond";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <SideBarPass/>
      <SideBarCond />
    </div>
    </BrowserRouter>
  );
}

export default App;

