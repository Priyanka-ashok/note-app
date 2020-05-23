import React from "react";
import "./dashboard.scss";

function Dashboard() {
  return (
    <>
    <div className="dashboard-container">
      <div className="dashboard__top">
        <p className="dashboard__top--title">Workspaces</p>
        <div className="dashboard__top--search">
          <span>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="search"
              id="search-icon"
              placeholder="Filter boards.."
            />
          </span>
        </div>
      </div>
      <div className="dashboard__bottom">
        <p className="dashboard__bottom--title">Dashboards</p>
        <span className="dashboard__bottom--playstore">
          <h4 className="dashboard__bottom--playstore-icons">
            Get the mobile app <i className="fa fa-apple"></i>
          </h4>
        </span>
      </div>
    </div>
    <div className="circle">
    <i className="arrow left"></i>
    </div>
    </>
  );
}

export default Dashboard;
