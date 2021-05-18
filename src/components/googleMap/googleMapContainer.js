import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper 
} from 'google-maps-react';

import styles from './googleMap.module.css';

var  AllPlaces = [
{
"name" : "D-Ground Corner",
"discrip" : "Chenone road, Opposite FM Station, D-ground, Faisalabad." ,
"dimension" : "Dimensions: 60 X 20",
"lat": "31.4064",
"lng":"73.1069",
},

{
    "name" : "Agriculture University",
    "discrip" : "Jail road,  Faisalabad." ,
    "dimension" : "Dimensions: 60 X 20",
    "lat": "31.4297",
    "lng":"73.0706",
    },
    {
        "name" : "Clock Tower",
        "discrip" : "All roads, Opposite FM Station, D-ground, Faisalabad." ,
        "dimension" : "Dimensions: 60 X 20",
        "lat": "31.4906",
         "lng":"73.1068",
        },
        {
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
};

markers = []


onMarkerClick = (props, marker, e) => {
this.setState({
  selectedPlace: props,
  activeMarker: marker,
  showingInfoWindow: true
 });
}

onLiClick = (i) =>{
this.setState({
    showingInfoWindow: true,
    activeMarker: this.markers[i],
    selectedPlace: AllPlaces[i]
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
<ul className={styles.places}>
  {AllPlaces.map((arrayItem, index)=>
    <li
    key = {index}
    className={styles.place}
    onClick={() => {this.onLiClick(index)}}
    >
      <h6 className={styles.name}>{arrayItem.name}</h6>
      <p className={styles.discrip}>{arrayItem.discrip}</p>
      <p className={styles.dimension}>{arrayItem.dimension}</p>
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
    <Map google={this.props.google} zoom={16}
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
  ))(MapContainer)