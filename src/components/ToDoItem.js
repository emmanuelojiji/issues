import React, { useState } from "react";
import "./ToDoItem.scss";

const ToDoItem = ({ text }) => {
  const [complete, setComplete] = useState(false);

  const [amount, setAmount] = useState(3)
  return (
    <div className={`to-do-item ${complete ? "fade-out" : null}`}>
      <p>{text}</p>
      <div
        className={`to-do-item-circle ${complete ? "complete" : null}`}
        onClick={() => setComplete(!complete)}
      ></div>
    </div>
  );
};

export default ToDoItem;
