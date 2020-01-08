import React, { Component } from 'react';
import "./infoperso.css";
class InfoPerso extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="form-passager">
                <h5>Informations personnelles</h5>
                <hr/>
   
                <form className="form">
                
                    
                

                    <p>  Genre  </p><input placeholder="Genre" type="text" />   <br />
                    <p>  Prénom              </p>            <input placeholder=" Taper ton prénom"    type="text" />  <br />
                    <p>  Nom                </p>             <input placeholder="Taper ton nom"    type="text" /><br />
                    <p>  E-mail             </p>            <input placeholder="Taper ton E-mail"   type="email" /> <br />
                    <p>  Numéro             </p>            <input placeholder=" Taper ton numéro"   type="number" /><br />
                    <p>  Date de naissance  </p>            <input placeholder="Taper ta date de naissance" type="date" /><br/><br/>
                    <button className="btn-enregister">Enregistrer</button>

                </form>
            </div>
        );
    }
}

export default InfoPerso;