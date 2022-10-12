import styled from '@emotion/styled';
import { TagProps } from 'types';

type StyledProps = {
  fontColor: string;
  backgroundColor: string;
};

const Container = styled.div`
  background: ${(props: StyledProps) => props.backgroundColor};
  color: ${(props: StyledProps) => props.fontColor};
  text-align: center;
  min-width: 40px;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  border-radius: 999px;
  padding: 0.25rem 0.5rem;
  font-size: 12px;
`;

type Props = {
  tag: TagProps;
};

const TodoTag = ({ tag }: Props) => {
  return (
    <Container fontColor={tag.fontColor} backgroundColor={tag.backgroundColor}>
      {tag.name}
    </Container>
  );
};

export default TodoTag;
