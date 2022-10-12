import styled from '@emotion/styled';
import TodoInput from 'components/create/todoInput';
import Seo from 'components/Seo';
import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { tagState } from 'states';

const Container = styled.div`
  padding: 1rem 1rem 0rem 1rem;
`;

const Create: NextPage = () => {
  const [tags] = useRecoilState(tagState);
  return (
    <Container>
      <Seo title="홈" />
      <TodoInput tags={tags} />
    </Container>
  );
};

export default Create;
