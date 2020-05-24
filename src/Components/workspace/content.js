import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {BoardNames} from "./names";
import AddRow from "./addRow";
import DoneTask from "./doneTask";

function Workspace() {
  const [isAddBoard, setBoardName] = useState(true);
  const [AddTaskTitle, setTaskTitle] = useState();
  const handleAddBoard = () => setBoardName(false);
  const handleTaskTitle = e => setTaskTitle(e.target.value);
  const [board, setBoard] = useState([]);
  const handleKeydown = e => {
    if (e.keyCode === 13) {
      const obj = {
        name: e.target.value,
        id: uuidv4()
      };
      setTaskTitle();
      setBoard([board, obj]);
    }
  };
  return (
    <div>
      {isAddBoard ? (
        <input type="text" onClick={handleAddBoard} />
      ) : (
        <input
          type="text"
          placeholder="Title"
          onChange={handleTaskTitle}
          value={AddTaskTitle}
          onKeyDown={handleKeydown}
        /> 
      )}

      <div>
        {/* <BoardNames board={board} /> */}
        <AddRow/>
      </div>

      <DoneTask />
    </div>
  );
}

export default Workspace;
