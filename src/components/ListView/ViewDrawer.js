/* the hamburger menu. handles the venues. can filter by name */
import React, {Component} from 'react';
import './ViewDrawer.css';
import VenueList from './VenueList';

class ViewDrawer extends Component {
  componentWillReceiveProps = (props) => {
    this.props = props
  }
  render() {
    return (
      <aside className = "sideBar">
        <nav className = "view-drawer">
            <input tabIndex="2"
              type = "text"
              id = "filter"
              placeholder = "Filter Venues"
              onChange = {this.props.filterOnQuery}
            />
          <ol className = "venue-list">
              <VenueList { ...this.props}venueClickHandler =
              {this.props.venueClickHandler}
              />
          </ol>
          <em>Data Query From <a href=
          "https://developer.foursquare.com/docs/api/venues/search" target="_blank" rel="noopener noreferrer">FourSquare</a>
          </em >
      </nav>
      </aside>
    );
  }
}
export default ViewDrawer;
