import styled from '@emotion/styled';
import TodoInput from 'components/create/todoInput';
import Seo from 'components/Seo';
import type { NextPage } from 'next';

const Container = styled.div`
  padding: 1rem 1rem 0rem 1rem;
`;

const Create: NextPage = () => {
  return (
    <Container>
      <Seo title="홈" />
      <TodoInput />
    </Container>
  );
};

export default Create;
