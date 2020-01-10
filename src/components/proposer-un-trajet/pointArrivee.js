import React, { Component } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
class PointArrivee extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        addressArrivee: '',
        latArr:'',
        lngArr:''
    };
  }
 
  handleChange = address => {
    this.setState({ addressArrivee:address });
    console.log("adr arr"+this.state.addressArrivee)
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({latArr:latLng.lat,lngArr:latLng.lng}))//console.log('Success', latLng ))
      .catch(error => console.error('Error', error));
      this.setState({ addressArrivee:address});
  };
 
  render() {
    return (<div className="input-autocomplete-div">
        
        {console.log("adress Arr:"+this.state.addressArrivee)}
        {console.log("latArr:"+this.state.latArr)}
        {console.log("lngArr:"+this.state.lngArr)}
   
        
      <PlacesAutocomplete
        value={this.state.addressArrivee}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
              value={this.state.addressArrivee}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>
    );
  }
}
export default PointArrivee