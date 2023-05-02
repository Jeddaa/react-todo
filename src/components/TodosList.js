/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

const TodosList = ({ todosProps }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

export default TodosList;
