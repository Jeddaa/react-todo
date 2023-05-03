/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

const TodoItem = ({ todo, handleChange, deleteTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    textDecoration: 'line-through',
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className="li-item">
      <div className="todo-content" style={viewMode}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            handleChange(todo.id);
          }}
        />
        <p className="todo-render" style={todo.completed ? completedStyle : null}>
          {todo.title}
        </p>
        <button className="edit-todo-btn" type="submit" onClick={handleEditing}>
          <AiFillEdit />
        </button>
        <button className="del-todo-btn" type="submit" onClick={() => deleteTodo(todo.id)}>
          <FaTrash />
        </button>
      </div>
      <input type="text" value={todo.title} className="textInput" style={editMode} onChange={(e) => setUpdate(e.target.value, todo.id)} onKeyDown={handleUpdatedDone} />
    </li>
  );
};

export default TodoItem;
