import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAwzRLehoMPKA4cyls3k_wlE6LRHrjEbXo&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
          var map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 37.781916, lng: -122.407953},
            zoom: 15
          });
        }


render() {
  return (
    <main>
      <div id="map"></div>
    </main>
  )
}
}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
