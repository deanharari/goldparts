import React, { Component } from "react";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import "./map-container.styles.scss";

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "450px"
    };
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 31.992724, lng: 34.939778 }}
      >
        <Marker name={{ lat: 31.992724, lng: 34.939778 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBADcQ0KWvn6GQOrIOrAfpbkYFkjzGn190"
})(MapContainer);
