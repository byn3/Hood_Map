import React from "react";
import ViewToggleButton from './ListView/ViewToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <ViewToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar_text">SF Libraries</div>
    </nav>
  </header>
);

export default toolbar;
