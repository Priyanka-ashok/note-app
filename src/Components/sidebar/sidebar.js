import React, { Component } from "react";
import "./sidebar.scss";

export class Sidebar extends Component {
  render() {
    return (
      <main className="sidebar">
        <section>
          <article className="sidebar__icon">
            <div className="sidebar__icon--bar"></div>
            <div className="sidebar__icon--bar" id="yellow"></div>
            <div className="sidebar__icon--circle"></div>
          </article>
          <article className="sidebar__align">
            <i className="fa fa-bell-o" aria-hidden="true"></i>
            <i className="fa fa-download" aria-hidden="true"></i>
          </article>
        </section>
        <section className="sidebar__middle">
          <p className="sidebar__middle--text">Upgrade</p>
        </section>
        <section className="sidebar__align">
          <i className="fa fa-user-plus" aria-hidden="true"></i>
          <i className="fa fa-search" aria-hidden="true"></i>
          <i className="fa fa-question" aria-hidden="true"></i>
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </section>
      </main>
    );
  }
}

export default Sidebar;
