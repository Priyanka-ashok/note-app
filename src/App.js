import React, { useState } from "react";
import Sidebar from "./Components/sidebar/sidebar";
import { Dashboard } from "./Components/dashboard/dashboard";
import WorkspaceHeader from "./Components/workspace/workspace";
import  Workspace from "./Components/workspace/content";
import "./App.css";

function App() {
  const [board, setBoard] = useState([]);
  const handleBoard = item => setBoard(item);
  return (
    <div className="App">
      <Sidebar />
      <Dashboard onBoard={item => handleBoard(item)} />
      <div className="wrapper ">
      {board.map((item, idx) => {
        if (item.isOpen) {
          return <WorkspaceHeader board={item} key={item.id} />;
        }
      })}
      <Workspace/>
      </div>
      
    </div>
  );
}

export default App;
