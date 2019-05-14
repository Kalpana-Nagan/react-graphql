import React, { Component } from "react";
import Map from "./map";

export default class MapWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "United States",
      location:{
          lat:'',lng:''
      },
      lat:37.0,
      lng:-95.7
    };
    this.getGeoCode = this.getGeoCode.bind(this);
  }
  componentDidUpdate() {
    console.log(this.props);
  }
  getGeoCode() {
    if (window.google) {
      let geocoder = new window.google.maps.Geocoder();
      let that = this;
      geocoder.geocode({ address: this.props.country }, 
        function(results,status) {
        if (status === "OK") {
            console.log(results);
          console.log(results[0].geometry.location);
          that.setState ({ lat:results[0].geometry.location.lat(),
        lng:results[0].geometry.location.lng()});
        console.log(that.state.lat, that.state.lng);
        } else {
          console.log(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    } else {
      console.log("couldnt load google map");
    }
  }
  render() {
    {
      this.getGeoCode();
    }
    return (
      <div className="google-map">
        <Map lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}
