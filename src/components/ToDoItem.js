import React from 'react';
import "./ToDoItem.scss"
const ToDoItem = ({text}) => {
    return (
        <div className='to-do-item'>
          <p>{text}</p>  
          <div className='to-do-item-circle'></div>
        </div>
    );
};

export default ToDoItem;