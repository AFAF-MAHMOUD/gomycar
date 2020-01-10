import React, { Component } from 'react'
import './proposerTrajet.css'
import MapWithADirectionsRenderer from './mapCreation';
import PointDepart from './pointDepart'
import PointArrivee from './pointArrivee'
/*import DateTrajet from './dateTimePicker'*/

class PropserTrajet extends Component{
render(){
    return(<div className='main-trajet-container'>
                <div className="inputs-container">
                <h1>Publier une annonce</h1>
                    <h3>D’où partez-vous ?</h3>
                    <PointDepart/>
                    <h3>Où allez-vous ?</h3>
                    <PointArrivee/>
                    <h3>Date et horaire:</h3>
                    <button type="submit" className="btn-enregister">Proposer le trajet</button>
                    
                    
                </div>
                <div className="map-container">
                <MapWithADirectionsRenderer />
                </div>
           </div>
    )
    }
}
export default PropserTrajet