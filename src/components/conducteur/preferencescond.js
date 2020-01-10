import React, { Component } from 'react';
import "./preferencecond.css";
class PreferenceCond extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h5>Préférences</h5>
                <hr />
                <div className="preferences">

                    <ul className="list-box">

                        <div className="pref-item">Discussion
                        <input type="checkbox" id="cb1" />
                            <label for="cb1">
                            <i className="fas fa-comment-dots icon"></i>
                            </label>
                        </div>


                        <div className="pref-item">Cigarette
                        <input type="checkbox" id="cb1" />
                            <label for="cb1"><i className="fas fa-smoking icon"></i></label>
                        </div>
                        <div className="pref-item"> Animaux<input type="checkbox" id="cb1" />
                            <label for="cb1"><i className="fas fa-cat icon"></i></label>
                        </div>
                        <div className="pref-item"> Musique <input type="checkbox" id="cb3" />
                            <label for="cb3"><i className="fas fa-music icon" ></i> </label>
                        </div>

                        <button className="btn-enregister">Enregistrer</button>
                    </ul>
                </div>
            </div>

        );
    }
}

export default PreferenceCond;