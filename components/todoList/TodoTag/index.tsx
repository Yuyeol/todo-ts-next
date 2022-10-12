import styled from '@emotion/styled';

const Container = styled.div<{ fontColor: string; backgroundColor: string }>`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  text-align: center;
  min-width: 40px;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  border-radius: 999px;
  padding: 0.25rem 0.5rem;
  font-size: 12px;
`;

export interface TagProps {
  id: string;
  name: string;
  fontColor: string;
  backgroundColor: string;
}

interface Props {
  tag: TagProps;
}

const TodoTag = ({ tag }: Props) => {
  return (
    <Container fontColor={tag.fontColor} backgroundColor={tag.backgroundColor}>
      {tag.name}
    </Container>
  );
};

export default TodoTag;
