import React, { useState } from "react";
import "./ToDoItem.scss";

const ToDoItem = ({ text }) => {
  const [complete, setComplete] = useState(false);
  return (
    <div className="to-do-item">
      <p>{text}</p>
      <div
        className={`to-do-item-circle ${complete ? "complete" : null}`}
        onClick={() => setComplete(!complete)}
      ></div>
    </div>
  );
};

export default ToDoItem;
