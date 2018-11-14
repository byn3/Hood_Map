/* loops venues and passes them to App.js */
import React, {Component} from "react";

class VenueList extends Component {

  componentWillReceiveProps = (props) => {
    this.props = props
  }

  render() {
    return (
      <div>
      <ol className = "venue-list">
        {this.props.filteredVenues && this.props.filteredVenues.map(venue =>
          <li className = "venue-name"
            onClick = {() => this.props.venueClickHandler(venue)}
            key = {venue.id}>
            <button tabIndex = "3" >
              {venue.name}
            </button>
          </li>
        )}
      </ol>
      </div>
    );
  }
};

export default VenueList;
