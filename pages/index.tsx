import styled from '@emotion/styled';
import Seo from 'components/Seo';
import TodoList from 'components/todoList';
import TodoItem from 'components/todoList/TodoItem';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filteredTodoListState, SHOW_ALL, todoListFilterState } from 'states';

const Container = styled.div`
  padding: 1rem 1rem 0rem 1rem;
`;

const Home: NextPage = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  const setTodoListFilter = useSetRecoilState(todoListFilterState);
  useEffect(() => {
    setTodoListFilter(SHOW_ALL);
  });

  return (
    <Container>
      <Seo title="홈" />
      <TodoList>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </TodoList>
    </Container>
  );
};

export default Home;
