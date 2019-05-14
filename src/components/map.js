import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDf-yIqxErTkbWzKhLox7nAANnrfDIY190",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
          
    }),
    withScriptjs,
    withGoogleMap
)((props) =>(
  
  
    <GoogleMap defaultZoom={4} zoom={4} disableDefaultUI={true}
    center={{ lat: props.lat, lng: props.lng }}
    defaultCenter={{ lat: props.lat, lng: props.lng }}>
 
        <Marker position={{ lat: props.lat, lng: props.lng }} />
        
    </GoogleMap>)
);

export default Map;

// import GoogleMapReact from 'google-map-react'
// const AnyReactComponent = ({ text }) => <div>{ text }</div>;
// export default class Map extends Component {
//   static defaultProps = {
//     center: { lat: 40.7446790, lng: -73.9485420 },
//     zoom: 11
//   }
// render() {
//     return (
//       <div className='google-map'>
//         <GoogleMapReact
//           defaultCenter={ this.props.center }
//           defaultZoom={ this.props.zoom }>
//           <AnyReactComponent
//             lat={ 40.7473310 }
//             lng={ -73.8517440 }
//             text={ 'hiiiiii'}
//           />
//         </GoogleMapReact>
//       </div>
//     )
//   }
// }