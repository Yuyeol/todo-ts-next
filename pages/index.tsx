import styled from '@emotion/styled';
import Seo from 'components/Seo';
import TodoList from 'components/todoList';
import TodoItem from 'components/todoList/TodoItem';
import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { todoState } from 'states';

const Container = styled.div`
  padding: 1rem 1rem 0rem 1rem;
`;

const Home: NextPage = () => {
  const [todos] = useRecoilState(todoState);

  return (
    <Container>
      <Seo title="홈" />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </TodoList>
    </Container>
  );
};

export default Home;
