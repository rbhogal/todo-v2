import React from "react";

import "./TodoItem.css";

const TodoItem = ({todo, completed}) => {

    
  return (
    <div
      className="ui middle aligned divided list TodoList"
      style={{ margin: "0", borderRadius: "5px" }}
    >
      <div className="item">
        <div className="right floated content">
          <div style={{backgroundColor: ' rgba(255, 0, 0, 0.74)'}} className="ui button">DEL</div>
        </div>
        <div className="middle aligned left floated content">
            <div style={{backgroundColor: 'rgba(0, 214, 0, 0.7)'}}className=" ui button">Check</div>
        </div>
        <div className="content">
          <h1 className="list-item">{todo}</h1>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
