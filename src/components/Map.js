import React, { Component } from 'react';
import './Maps.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{lat: 37.776976, lng: -122.418344}}>
  {
      props.markers && props.markers.filter(
      marker => marker.isVisible).map((marker, id) => {
        const venueInfo = props.filteredVenues.find(venue =>(venue.id ===marker.id))

    return(
      <Marker
        key={id}
        className="marker-pin"
        position={{lat:marker.lat, lng:marker.lng}}
        onClick={() => props.handleMarkerClick(marker)}
        animation={marker.clickedOnMarker ===true ? 1:null}>
        {
          marker.isOpen && (
          <InfoWindow onCloseClick={props.closeOpenMarkers}>
            <React.Fragment>
              <div className="info-window">
                <p className="info-title">{venueInfo.name}</p>
                <p className="info-subtext">{venueInfo.location.formattedAddress[0]}</p>
                <p className="info-subtext">{venueInfo.location.formattedAddress[1]}</p>
              </div>
            </React.Fragment>
          </InfoWindow>)
        }
      </Marker>
    )})
  }
  </GoogleMap>
))

class Map extends Component {
  componentWillReceiveProps = (props) => {
    this.props = props
  }
  render() {

    return (
      <div className="map">

            <MyMapComponent
              role="application"
              aria-label="map"
              {...this.props}
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exREMOVED MY KEYSo"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />

      </div>

    );
  }
}

export default Map;
