
import  React, { Component } from 'react';

import Items from './Items';

import './resultatrecherche.css';

class Trajet extends Component{
state={
  items:[
    {id:1,  Pointdépart:'Sousse' , Destination:'Tunis' , Prix:12 , Marquevoiture:'Punto' , Date:20 , Heure:12 },
    {id:2,  Pointdépart:'Sfax' , Destination:'Tunis' , Prix:15 , Marquevoiture:'Peugeot' , Date:2, Heure:17 },
    {id:3,  Pointdépart:'lafayette' , Destination:'lac2' , Prix:3 , Marquevoiture:'Audi', Date:2  , Heure:17 }
  ]
}

render(){
  return (
    <div className="App">
      <h1>Covoiturage(s) Disponible(s)</h1>
      <Items  items={this.state.items}/>
    </div>
  );
}




}

export default Trajet;
