import styled from '@emotion/styled';
import { TodoProps } from 'types';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const Container = styled.div`
  padding: 1rem 1rem 0rem 1rem;
`;

type Props = {
  todos: TodoProps[];
};

const TodoList = ({ todos }: Props) => {
  return (
    <Container>
      <TodoInput />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};

export default TodoList;
