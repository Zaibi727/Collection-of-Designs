import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper 
} from 'google-maps-react';

import styles from './googleMap.module.css';

var  AllPlaces = [
  {
   id: 1,
  "name" : "D-Ground Corner",
  "discrip" : "Chenone road, Opposite FM Station, D-ground, Faisalabad." ,
  "dimension" : "Dimensions: 60 X 20",
  "lat": "31.4064",
  "lng":"73.1069",
  },
  
  {
      id: 2,
      "name" : "Agriculture University",
      "discrip" : "Jail road,  Faisalabad." ,
      "dimension" : "Dimensions: 60 X 20",
      "lat": "31.4297",
      "lng":"73.0706",
      },
      {
          id: 3,
          "name" : "Clock Tower",
          "discrip" : "All roads, Opposite FM Station, D-ground, Faisalabad." ,
          "dimension" : "Dimensions: 60 X 20",
          "lat": "31.4906",
           "lng":"73.1068",
          },
          {
              id: 4,
              "name" : "GCU Faislabad",
              "discrip" : "Jhang road,  Faisalabad." ,
              "dimension" : "Dimensions: 60 X 20",
              "lat": "31.4181",
               "lng":"73.0776",
              },
  ]

class MapContainer extends Component {
state = {
showingInfoWindow: false,
activeMarker: {},
selectedPlace: {},
selectedId:""
};

markers = []


onMarkerClick = (props, marker, e) => {
this.setState({
  selectedPlace: props,
  activeMarker: marker,
  showingInfoWindow: true
 });
}

onLiClick = (i, locationId) =>{
  this.setState({
      showingInfoWindow: true,
      activeMarker: this.markers[i],
      selectedPlace: AllPlaces[i],
      selectedId: locationId
  })
  }


onMapClicked = (props) => {
if (this.state.showingInfoWindow) {
  this.setState({
    showingInfoWindow: false,
    activeMarker: null
  })
}
}


findPlaces = () => (
  <ul className={styles.places} >
    {AllPlaces.map((item, i)=>
      <li
      key = {i}
      className={styles.place}
      style={{ backgroundColor: this.state.selectedId === item.id?"gray":"white" }} 
      onClick={() => {this.onLiClick(i, item.id)}}
      >
        <h6 className={styles.name}>{item.name}</h6>
        <p className={styles.discrip}>{item.discrip}</p>
        <p className={styles.dimension}>{item.dimension}</p>
       </li>
    )}
  </ul>
  );

render() {
return (
  <div className={styles.wrapper}>
    <div className={styles.left}>
      <div>
        <div className={styles.headDiv}>
          <h5 className={styles.head}> Avialable Locations</h5>    
        </div>
        <div>
          {this.findPlaces()}
        </div>
      </div>
    </div>
    <div>
    <Map 
     containerStyle={containerStyle}
    google={this.props.google} zoom={16}
      initialCenter = {{lat:31.4064, lng:73.1069}}
      onClick={this.onMapClicked}>
      {AllPlaces.map((marker, i) =>
          <Marker
          ref={(e) => {if (e) this.markers[i] = 
          e.marker}}
          onClick={this.onMarkerClick}
          title = {marker.name}
          name={marker.name}
          position = 
{{lat:marker.lat,lng:marker.lng}}
          />
      )}
      <InfoWindow
      className={styles.info}
        onOpen={this.windowHasOpened}
        onClose={this.windowHasClosed}
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
        <div className={styles.marker}>
          <h5>{this.state.selectedPlace.name}</h5>
        </div>
      </InfoWindow>
    </Map>
    </div>
  </div>
 );
 }
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey
    }
  ))(MapContainer);

  const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '100vh'
  }