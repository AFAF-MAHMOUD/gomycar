import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./preference.css";
class Preference extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                 <h5>Informations personnelles</h5>
                <hr/>
                <div className="preferences">

                    <ul className="list-box">

                        <div className="pref-item">Discussion
                        <input type="checkbox" id="cb1" />
                            <label for="cb1">
                                <img className="photo-pref" src="https://image.winudf.com/v2/image1/Y29tLmxpbmdvLmFwcF9pY29uXzE1Njg1NjM2NTZfMDk4/icon.png?w=170&fakeurl=1" />
                            </label>
                        </div>


                        <div className="pref-item">Cigarette
                        <input type="checkbox" id="cb1" />
                            <label for="cb1"><img className="photo-pref" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3je8QpCQCCNs2NOecW42LkFn2IlW4cVovp61ZxLuseKT8KU0&s" /></label>
                        </div>
                        <div className="pref-item"> Animaux
                        <input type="checkbox" id="cb1" />
                            <label for="cb1"><img className="photo-pref" src="https://images.squarespace-cdn.com/content/v1/54cc191ce4b0f886f4762582/1568306989325-58DTRTLXAJRM2L5VMHDD/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Animal+Services+Icon.png" /></label>
                        </div>
                        <div className="pref-item"> Musique
                         <input type="checkbox" id="cb3" />
                            <label for="cb3"><img className="photo-pref" src="https://www.icone-png.com/png/16/15692.png" /> </label>
                        </div>

                        <button className="btn-enregister">Enregistrer</button>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Preference;