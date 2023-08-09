import React, { useState } from "react";
import "./ToDoList.scss";
import ToDoItem from "./ToDoItem";
import { ToDos } from "../Data";

const ToDoList = ({}) => {
  const [amount, setAmount] = useState(ToDos.length);

  return (
    <div className="to-do-container container">
      <div className="to-do-header">
        <h3 className="heading">To do list</h3>
        <p>
          {amount} task{amount > 1 && "s"} outstanding
        </p>
      </div>

      <div className="new-to-do">
        <input
          type="text"
          placeholder="Start typing.."
          className="new-to-do-input"
        ></input>
        <button> Add</button>
      </div>

      {ToDos.map((toDo) => (
        <ToDoItem text={toDo} setAmount={setAmount} amount={amount} />
      ))}
    </div>
  );
};

export default ToDoList;
