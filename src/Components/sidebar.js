import React, { Component } from "react";
import "./sidebar.scss";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div>
          <div className="sidebar__icon">
            <div className="sidebar__icon--bar"></div>
            <div className="sidebar__icon--bar" id="yellow"></div>
            <div className="sidebar__icon--circle"></div>
          </div>
          <div className="sidebar__align">
            <i className="fa fa-bell-o" aria-hidden="true"></i>
            <i className="fa fa-download" aria-hidden="true"></i>
          </div>
        </div>
        <div className="sidebar__middle">
          <p className="sidebar__middle--text">Upgrade</p>
        </div>
        <div className="sidebar__align">
          <i className="fa fa-user-plus" aria-hidden="true"></i>
          <i className="fa fa-search" aria-hidden="true"></i>
          <i className="fa fa-question" aria-hidden="true"></i>
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Sidebar;
