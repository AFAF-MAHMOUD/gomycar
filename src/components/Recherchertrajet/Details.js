import React from 'react';
import './Detai.css'

const Details =()=>{
    return(

<div className="conteneur">

<div className="conducteur">
  <h2>Conducteur</h2>
  <img src="https://cdn.pixabay.com/photo/2014/04/02/10/54/person-304893_960_720.png"/>
  <h3>Ali Hamdi</h3>
</div>
<div className="presentationtrajet">  

<p>Point départ : Sousse</p>
<p>Destination : Tunis</p>
<p>Prix : 12 DT</p>
<p>Marque voiture : Audi</p>
<p>Heure: 12:00</p>

</div>
<button>Envoyer message</button>

</div>

    )
}
export default Details;