import "./workspace.scss";
import React from "react";

export function WorkspaceHeader({ board }) {
  return (
    <main className="workspace-header">
      <section className="workspace-header__boardname navbar">
        <article>
          <h1 className="title">
            {board.name} <i className="fa fa-star" id="star"></i>
          </h1>
          <p className="description">Add board description</p>
        </article>
        <article className="workspace-header__boardname--video">
          <div className="videocall userdetails ">
            <img src="https://img.icons8.com/color/48/000000/zoom.png" />
            <p>Start Zoom Call</p>
          </div>
          <div className="user-activity userdetails">
            <div>
              <i className="fa fa-user-circle"></i>/1 | Activities/0
            </div>
          </div>
          <i className="fa fa-ellipsis-h"></i>
        </article>
      </section>

      <section className="workspace-header__maintable navbar">
        <article className="workspace-header__maintable--heading">
          <i className="fa fa-th-list list-view"></i>
          <p className="main-table">Main Table</p>
          <i className="fa fa-angle-down down-caret"></i>
        </article>
        <article className="workspace-header__maintable--user">
          <button className="add-new-item">
            New Item <i className="fa fa-angle-down down-caret"></i>
          </button>
          <input
            type="text"
            placeholder="Search/Filter Board"
            className="search-bar"
          />
          <i className="fa fa-user-circle"></i>
          <i className="fa fa-eye-slash"></i>
          <i></i>
        </article>
      </section>
    </main>
  );
}
export default WorkspaceHeader;
