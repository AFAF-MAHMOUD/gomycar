
import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';


class Items extends Component {
    render() {
        const { items } = this.props;
        const theItems = items.map(item => {
            return (
                <div className="content" key={item.id}>
                
                    <p>{item.Pointdépart}</p>
                    <p>{item.Destination}</p>
                
                    <p>{item.Prix} DT</p>
                    <p>{item.Marquevoiture}</p>
                    <p>{item.Date}</p>
                    <p>{item.Heure}</p><br/><br/><br/>
                    <button><Link to="/details">Détails</Link></button>
                </div>
               
            )
        })
        return(
            <div>
       {theItems}
            
            </div>
        )
    }

}
export default Items;