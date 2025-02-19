import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="ADD NEW TASK..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default TodoForm;
