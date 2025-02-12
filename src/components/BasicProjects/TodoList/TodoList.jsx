import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Add todo item
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  // Remove todo item
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todoList-container">
      <div className="todoList-header">
        <h2 className="todoList-title">Todo List</h2>
      </div>
      <div className="todoList-input-container">
        <input
          type="text"
          className="todoList-input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button className="todoList-add-button" onClick={addTodo}>
          Add
        </button>
      </div>
      <div className="todoList-list-container">
        <ul className="todoList-list">
          {todos.map((todo, index) => (
            <li className="todoList-item" key={index}>
              {todo}
              <button className="todoList-remove-button" onClick={() => removeTodo(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
