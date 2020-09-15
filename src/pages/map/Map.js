import React from 'react';
import GoogleMapReact from 'google-map-react';
// import Api from '../../api/Api'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Map(props) {
  const GOOGLE_API_KEY = 'AIzaSyB1eK86IwyQzlpAQcak9vMcKOwLa0QO8Sk'
  // const {coordLon, coordLat} = Api()
  return (
      // Important! Always set the container height
      <div className='pt-3' style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={`key:${GOOGLE_API_KEY}`}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
        <AnyReactComponent
        //default hard coded for demonstration
          lat={59.95}
          lng={30.33}
          text="My Marker"
        />
        </GoogleMapReact>
      </div>
  ); 
}

Map.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};

export default Map;