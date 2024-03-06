import React, { useState } from "react";
import "./app.css";

function App() {
  // A state variable to store the new todo input
  const [input, setInput] = useState("");

  // A state variable to store the list of todos
  const [todos, setTodos] = useState([]);

  // A function to handle the input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // A function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new todo to the list if the input is not empty
    if (input) {
      setTodos([...todos, { text: input, completed: false }]);
      // Clear the input field
      setInput("");
    }
  };

  // A function to toggle the completed status of a todo
  const toggleCompleted = (index) => {
    // Make a copy of the todos array
    const newTodos = [...todos];
    // Flip the completed value of the todo at the given index
    newTodos[index].completed = !newTodos[index].completed;
    // Update the state with the new array
    setTodos(newTodos);
  };

  // A function to delete a todo from the list
  const deleteTodo = (index) => {
    // Filter out the todo at the given index
    const newTodos = todos.filter((todo, i) => i !== index);
    // Update the state with the new array
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="input"
          placeholder="Enter a new task"
        />
        <button type="submit" className="button">
          Add
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(index)}
            />
            <span
              className={todo.completed ? "todo-text strike" : "todo-text"}
            >
              {todo.text}
            </span>
            <button
              className="delete-button"
              onClick={() => deleteTodo(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;