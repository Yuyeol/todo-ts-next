import { TodoProps } from 'types';
import TodoInput from './TodoInput/TodoInput';
import TodoItem from './TodoItem';

type Props = {
  todos: TodoProps[];
};

const TodoList = ({ todos }: Props) => {
  return (
    <div>
      <TodoInput />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
