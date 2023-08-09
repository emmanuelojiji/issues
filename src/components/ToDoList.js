import React, { useState } from "react";
import "./ToDoList.scss";
import ToDoItem from "./ToDoItem";
import { ToDos } from "../Data"; // Import the ToDos from the correct path

const ToDoList = () => {
  const [toDos, setToDos] = useState(ToDos); // Initialize with the imported ToDos
  const [amount, setAmount] = useState(ToDos.length); // Initialize with the length of ToDos

  const [userInput, setUserInput] = useState("");

  const addToDo = () => {
    if (userInput.trim() !== "") {
      setToDos([...toDos, userInput]);
      setUserInput(""); // Clear the input after adding
      setAmount(amount + 1); // Update the amount
    }
  };

  return (
    <div className="to-do-container container">
      <div className="to-do-header">
        <h3 className="heading">To do list</h3>
        <p>
          {amount} task{amount !== 1 ? "s" : ""} outstanding
        </p>
      </div>

      <div className="new-to-do">
        <input
          type="text"
          placeholder="Start typing.."
          className="new-to-do-input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
        <button onClick={addToDo}> Add</button>
      </div>

      {toDos.map((toDo, index) => (
        <ToDoItem
          key={index}
          text={toDo}
          setAmount={setAmount}
          amount={amount}
          setToDos={setToDos}
        />
      ))}
    </div>
  );
};

export default ToDoList;
