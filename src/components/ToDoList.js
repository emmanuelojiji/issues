import React, { useState } from "react";
import "./ToDoList.scss";
import ToDoItem from "./ToDoItem";
import { ToDos } from "../Data";

const ToDoList = () => {
  const [newToDoItemVisible, setNewToDoItemVisible] = useState(false);
  return (
    <div className="to-do-container container">
      <div className="to-do-header">
        <h3 className="heading">To do list</h3>
        <button onClick={() => setNewToDoItemVisible(true)}>
          Create to do
        </button>
      </div>

      {newToDoItemVisible && (
        <div className="new-to-do">
          <input
            type="text"
            placeholder="Start typing.."
            className="new-to-do-input"
          ></input>
        </div>
      )}

      {ToDos.map((toDo) => (
        <ToDoItem text={toDo} />
      ))}
    </div>
  );
};

export default ToDoList;
