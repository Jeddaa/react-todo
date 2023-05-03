/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add an item');
    }
  };
  return (
    <>
      <form className="form-todo" onSubmit={handleSubmit}>
        <input type="text" className="form-todo-input" placeholder="Add todo..." value={title} onChange={handleChange} />

        <button type="submit" className="todo-btn">
          <FaPlusCircle />
        </button>
      </form>
      <span className="form-todo-span">{message}</span>
    </>
  );
};

export default InputTodo;
InputTodo.propTypes = { addTodoItem: PropTypes.func.isRequired };
