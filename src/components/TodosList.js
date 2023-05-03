/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, deleteTodo, setUpdate }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} todo={todo} handleChange={handleChange} deleteTodo={deleteTodo} setUpdate={setUpdate} />
    ))}
  </ul>
);

export default TodosList;
