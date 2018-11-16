import React, { Component } from 'react';
import Map from './components/Map';
import Toolbar from './components/Toolbar';
import ViewDrawer from './components/ListView/ViewDrawer'
import SquareAPI from './API/'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      venues: [], filteredVenues: [], markers: [], filteredMarkers: [],
      center: [], zoom: [16], query: "", viewDrawerOpen: false
    };
  }

  closeOpenMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      marker.clickedOnMarker = false;
      marker.animation = "null";
      return marker;
    });

    this.setState({
      markers: Object.assign(markers, markers)
    })
  }

  openInfoWindowOnClick = (marker) => {
    const venueClicked = this.state.venues.find(venue => venue.id === marker.id)
    SquareAPI.getVenueDetails(marker.id).then(results => {
        const concatData = Object.assign(venueClicked, results.response.venue);
        this.setState({
          venues: Object.assign(this.state.venues, concatData)
        })
      })
      .catch(error => {this.setState(error)
        console.log(this.state.error)
      })
  }

  handleMarkerClick = (marker) => {
    this.closeOpenMarkers()
    marker.isOpen = true;
    marker.clickedOnMarker = true;
    this.setState({
      markers: Object.assign(this.state.markers, marker)
    });
    this.openInfoWindowOnClick(marker);
  };

  venueClickHandler = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker);
  };

  filterOnQuery = event => {
    const query = event.target.value;
    this.setState({query})
    if (query === "") {
      const filteredVenues = this.state.venues;
      this.setState({
        filteredVenues
      });
      const filteredMarkers = this.state.markers;
      this.setState({
        filteredMarkers
      });
    }
    else {
      const filteredVenues = this.venueFilter(query);
      this.setState({
        filteredVenues
      });

      const filteredMarkers = this.markerFilter(query);
      this.setState({
        filteredMarkers
      })
    }
  }
  venueFilter = (query) => {
    const filteredVenues = this.state.venues.filter(venue =>
      venue.name.toUpperCase().includes(query.toUpperCase())
    );
    return filteredVenues;
  };
  markerFilter = (query) => {
    const filteredMarkers = this.state.venues.map(venue => {
      const match = venue.name.toUpperCase().includes(query.toUpperCase());
      const marker = this.state.markers.find(marker => marker.id === venue.id);
      if (match) {
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      return marker;
    });
    return filteredMarkers
  }


  componentDidMount() {

    window.gm_authFailure = () => {
      var x = false;
      alert("There was an error with the Google Maps API")
      console.log("Hello Beautiful Reviewer");
      x = true;
    }


    SquareAPI.search({
        near: "San Francisco",
        query: "library",
        radius: 1000,
        limit: 15
      }).then(results => {
        const {venues} = results.response;
        const markers = venues.map(venue => {
          return {
            lat: venue.location.lat,
            lng: venue.location.lng,
            id: venue.id,
            isOpen: false,
            isVisible: true,
            clickedOnMarker: false,
          };
        });
        this.setState({venues});
        this.setState({markers});

        const filteredVenues = venues
        const filteredMarkers = markers
        this.setState({
          filteredVenues
        })
        this.setState({
          filteredMarkers
        })

      })
      .catch(e => {
        alert("There was an error with the Foursquare URL")
      })
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        viewDrawerOpen: !prevState.viewDrawerOpen
      };
    });
  };

  render() {
    let viewDrawer;
    if (this.state.viewDrawerOpen) {
      viewDrawer =
      <ViewDrawer
      { ...this.state}
      venueClickHandler = {this.venueClickHandler}
      filterOnQuery = {this.filterOnQuery}
      />;
    }

/* if(x) */
    return (

      <div style = {{height: '100%'}}>
          <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/>
          {viewDrawer}
          <main style = {{marginTop: '65px'}}>
          </main>

              <Map
                { ...this.state}
                handleMarkerClick = {this.handleMarkerClick}
                closeOpenMarkers = {this.closeOpenMarkers}
                filterOnQuery = {this.filterOnQuery}
                click = {this.mapClickHandler}
              />

      </div>

    );
  }
}

export default App;
