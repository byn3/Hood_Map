/* just the hamburger menu icon */
import React from 'react';
import './ViewToggleButton.css';

const viewToggleButton = props => (
  <button
    tabIndex="1"
    className = "toggle-button"
    onClick = {props.click}>
        <div className = "toggle-button_line" / >
        <div className = "toggle-button_line" / >
        <div className = "toggle-button_line" / >
  </button>
);

export default viewToggleButton;
