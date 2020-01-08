import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import SideBar from './components/passager/sidebar/sidebar';
import SideBarCond from "./components/conducteur/sidebarcond/sidebarcond";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <SideBar/>
      <SideBarCond />
    </div>
    </BrowserRouter>
  );
}

export default App;

