import React, { useState } from "react";
import "./ToDoItem.scss";

const ToDoItem = ({ text, amount, setAmount }) => {
  const [complete, setComplete] = useState(false);

  return (
    <div className={`to-do-item ${complete ? "fade-out" : null}`}>
      <p>{text}</p>
      <div
        className={`to-do-item-circle ${complete ? "complete" : null}`}
        onClick={() => {
          if (!complete) {
            setComplete(!complete);
            setAmount(amount - 1);
          } else {
            setComplete(!complete);
            setAmount(amount + 1);
          }
        }}
      ></div>
    </div>
  );
};

export default ToDoItem;
