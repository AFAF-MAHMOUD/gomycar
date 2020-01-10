import React, { Component } from 'react';
import NavMenu from './navbar'
import Slider from './slider'
import Services from './services'
import Conducteur from './conducteur'
class Accueil extends Component {
    render() { 
        return ( 
            <div className="home-main-container">
                
                <Slider/>
                <Services/>
                <Conducteur/>
            </div>
         );
    }
}
 
export default Accueil;