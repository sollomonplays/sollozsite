import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          alignItems: "center",
        }}
      >
        <button>
          <span className="complete" onClick={() => completeTodo(todo.id)}>
            Completar
          </span>
        </button>
        <button>
          <span className="remove" onClick={() => removeTodo(todo.id)}>
            X
          </span>
        </button>
      </div>
    </div>
  );
};
export default Todo;
