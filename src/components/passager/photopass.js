import React, { Component, Profiler } from 'react';
import "./photopass.css";
import { NavLink } from 'react-router-dom';
class PhotoPass extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-photo">
                <h5>Photo</h5>
                <hr />
                <div className="photo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png" className="icon-profil" />
                    <h5>Ajouter une photo</h5>
                    <input className="choisir-photo" value="Choisir une photo" />
                    <p>PNG, JPG ou GIF de 3 Mo maximum</p>
                    <p className="explication">Les informations collectées sont utilisées afin de créer et personnaliser votre compte, communiquer avec nous ou les autres membres .</p>

                </div>
                

            </div>
        );
    }
}

export default PhotoPass;