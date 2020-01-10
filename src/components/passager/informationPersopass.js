import React, { Component } from 'react';
import "./infopersopass.css";
class InfoPersoPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passagers: [
                {
                    id: 1, genre: "femme", nom: "mahmoud", prenom: "afef", email: "", numero: "", dateNaissance: ""
                }
            ],
           

        }

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    
    render() {
        return (
            <div className="form-passager">
                <h5>Informations personnelles</h5>
                <hr />
                <form className="form" onSubmit={this.handleSubmit}>
                    <p>Genre</p><input value={this.state.passagers[0].genre} placeholder="Genre" type="text" name="genre" onChange={this.handleChange} />   <br />
                    <p>Prénom</p> <input value={this.state.passagers[0].prenom}placeholder=" Taper ton prénom" name="prenom" type="text" onChange={this.handleChange} />  <br />
                    <p>Nom</p> <input placeholder="Taper ton nom" name="nom" type="text" onChange={this.state.handleChange} /><br />
                    <p>E-mail</p><input placeholder="Taper ton E-mail" name="email" type="email" onChange={this.handleChange} /> <br />
                    <p>Numéro</p><input placeholder=" Taper ton numéro" type="number" name="num" onChange={this.handleChange} /><br />
                    <p>Date de naissance </p><input placeholder="Taper ta date de naissance" name="datenai" type="date" onChange={this.handleChange} /><br /><br />
                    <button type="submit" className="btn-enregister">Enregistrer</button>
                </form>
            </div>
        );
    }
}

export default InfoPersoPass;