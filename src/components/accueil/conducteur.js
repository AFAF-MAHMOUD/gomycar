import React from "react";
import './conducteur.css';
const Conducteur = () => {
    return (
        <div className="conducteur-container">
            
                <img src='./driver.jpg' alt='driver'/>
                <div className="conducteur">
                <h3>Vous prenez le volant ? Dites-nous où vous allez !</h3>
                <p>Ensemble, permettons à des millions de personnes de se déplacer.</p>
                <button  className="btn-enregister"><a href="/proposer-un-trajet">Proposer un trajet</a></button>
            </div>
        </div>
    )
}
export default Conducteur;