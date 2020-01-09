import React, { Component } from 'react';

import './Recherche.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import { Link } from 'react-router-dom';

class Recherchetrajet extends Component {
    state = {
      starDate: null,
      endDate: null,
      depart: '',
      destination: ''
    }
  
  
    departChange(n) {
      this.setState({
        depart: n.target.value
      });
    }
  
    destinationChange(c) {
      this.setState({
        destination: c.target.value
      });
    }
  
    render() {
      return (
        <div className="App">
          <h1>Où voulez-vous aller ?</h1>
          <form>
  
            <input type="text" value={this.state.depart} placeholder="Départ" onChange={this.departChange.bind(this)}></input><br /><br />
            <input type="text" value={this.state.destination} placeholder="Destination" onChange={this.destinationChange.bind(this)}></input><br /><br />
  
  
            <div className="selection">
  
  
              <SingleDatePicker
                date={this.state.date} // momentPropTypes.momentObj or null
                onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
              /><br /><br /><br/>
              <button className="btn-rechercher"><Link to="/trajet">Rechercher</Link></button>
            </div>
          </form>
        </div>
  
  
      );
    }
  }
  
  export default  Recherchetrajet;