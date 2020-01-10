import React from "react";
import './services.css';
const Services = () => {
    return (
        <div className="sevice-container">
            <div className="service">
                <i className="fas fa-hand-holding-usd"></i>
                <h3>Economique</h3>
                <p>GoMyCar ne prélève aucun frais sur les réservations, ce qui vous permet d'économiser encore plus vos coûts!</p>
            </div>
            <div className="service">
            <i className="fas fa-map-marked-alt"></i>
                <h3>Avoir le choix</h3>
                <p>L'avantage des routes ? Elles vont partout ! Littéralement. Profitez de milliers de destinations.</p>
            </div>
            <div className="service">
            <i className="fas fa-route"></i>
                <h3>Simple & direct</h3>
                <p>Que vous prévoyiez à l’avance ou réserviez en dernière minute, vous trouverez toujours un tarif avantageux.</p>
            </div>
        </div>
    )
}
export default Services;