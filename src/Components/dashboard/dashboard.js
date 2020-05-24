import React, { useState } from "react";
import "./dashboard.scss";

import { BoardNames } from "../boardNames";
import { v4 as uuidv4 } from "uuid";

export function Dashboard({ onBoard }) {
  const [isAddBoard, setBoardName] = useState(true);
  const [addBoardName, setAddBoardName] = useState("");
  const [board, setBoard] = useState([]);

  const handleAddBoard = () => setBoardName(false);
  const handleBoardName = e => setAddBoardName(e.target.value);
  const handleCreateBoard = e => {
    if (e.keyCode === 13) {
      const obj = {
        name: e.target.value,
        id: uuidv4()
      };
      setAddBoardName("");
      onBoard([...board, obj]);
      setBoard([...board, obj]);
    }
  };

  const handleIsOpenBoard = id => {
    const newBoard = board.map(item => {
      if (id === item.id) {
        item.isOpen = true;
        return item;
      } else {
        item.isOpen = false;
        return item;
      }
    });
    onBoard(newBoard);
    setBoard(newBoard);
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard__top">
          <p className="dashboard__top--title">Workspaces</p>

          <div className="dashboard__top--search">
            <span>
              <i className="fa fa-search" aria-hidden="true" />
              <input
                type="search"
                id="search-icon"
                placeholder="Filter boards.."
              />
            </span>
          </div>

          <div className="dashboard__top--addBoard">
            <div className="main">
              <img
                src="https://img.icons8.com/metro/26/000000/sort-down.png"
                alt="arrow"
                className="down-arrow"
              />
              <img
                src="https://img.icons8.com/flat_round/50/000000/home.png"
                alt="home"
                className="home-icon"
              />
              <p>Main</p>
            </div>
            <div className="addItem" onClick={handleAddBoard}>
              <img
                src="https://img.icons8.com/ultraviolet/40/000000/plus.png"
                alt="add"
              />
            </div>
          </div>

          <ul className="list">
            <BoardNames
              boardNames={board}
              onOpenBoard={id => handleIsOpenBoard(id)}
            />
          </ul>
          {!isAddBoard && (
            <input
              type="text"
              placeholder="Enter Board Name"
              onChange={handleBoardName}
              onKeyDown={handleCreateBoard}
              value={addBoardName}
              className="dashboard__top--inputbar"
            />
          )}
        </div>
        <div className="dashboard__bottom">
          <p className="dashboard__bottom--title">Dashboards</p>
          <span className="dashboard__bottom--playstore">
            <h4 className="dashboard__bottom--playstore-icons">
              Get the mobile app <i className="fa fa-apple" />
            </h4>
          </span>
        </div>
      </div>
      {/* <div className="circle">
        <i className="arrow left" />
      </div> */}
    </>
  );
}
