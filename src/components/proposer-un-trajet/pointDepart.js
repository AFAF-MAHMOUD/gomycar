import React, { Component } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
class PointDepart extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        addressDepart: '',
        latDep:'',
        lngDep:''
    };
  }
 
  handleChange = address => {
    this.setState({ addressDepart:address });
    console.log("adr "+this.state.addressDepart)
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({latDep:latLng.lat,lngDep:latLng.lng}))//console.log('Success', latLng ))
      .catch(error => console.error('Error', error));
      this.setState({ addressDepart:address});
  };
 
  render() {
    return (<div className="input-autocomplete-div">
        {console.log("adress Dep:"+this.state.addressDepart)}
        {console.log("latDep:"+this.state.latDep)}
        {console.log("lngDep:"+this.state.lngDep)}
   
        
      <PlacesAutocomplete
        value={this.state.addressDepart}
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
              value={this.state.addressDepart}
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
export default PointDepart