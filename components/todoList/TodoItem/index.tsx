import { TodoProps } from 'types';

type Props = {
  todo: TodoProps;
};

const TodoItem = ({ todo }: Props) => {
  return <div>{todo.title}</div>;
};

export default TodoItem;
