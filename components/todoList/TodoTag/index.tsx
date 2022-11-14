import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { tagItemState } from 'states';
import { Common } from 'styles/GlobalStyle';

const Container = styled.div<{
  fontColor: string;
  backgroundColor: string;
  activeColor: string;
}>`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  border: 4px solid ${(props) => props.activeColor};
  text-align: center;
  min-width: 40px;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  border-radius: 999px;
  padding: 0 0.5rem;
  font-size: 12px;
`;

interface Props {
  tagId: string;
  isSelected?: boolean;
}

const TodoTag = ({ tagId, isSelected }: Props) => {
  const tag = useRecoilValue(tagItemState(tagId));
  return (
    <Container
      fontColor={tag.fontColor}
      backgroundColor={tag.backgroundColor}
      activeColor={isSelected ? Common.colors.point : 'transparent'}
    >
      {tag.name}
    </Container>
  );
};

export default TodoTag;
