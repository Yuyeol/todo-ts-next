import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { todoItemState } from 'states';
import { Common } from 'styles/GlobalStyle';
import TodoTag from '../TodoTag';

const Container = styled.div`
  box-shadow: ${Common.shadows.main};
  margin-bottom: 0.75rem;
  border-radius: 10px;
  background: white;
  overflow: hidden;
  border: 1px solid ${Common.colors.border};
`;

const Header = styled.div`
  background: ${Common.colors.point};
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  color: ${Common.colors.grey400};
`;

const Title = styled.div`
  font-family: ${Common.fonts.Pretendard700};
  margin-left: 0.5rem;
  font-size: 18px;
`;
const Content = styled.div``;
const Date = styled.div`
  font-size: 12px;
  color: ${Common.colors.grey400};
  text-align: end;
`;

interface Props {
  todoId: string;
}

const TodoItem = ({ todoId }: Props) => {
  const todo = useRecoilValue(todoItemState(todoId));
  return (
    <Container>
      <Header
        style={{
          background: Common.colors.point,
          padding: '0.25rem 0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Date>{todo.createDate}</Date>
        <DeleteButton>✕</DeleteButton>
      </Header>

      <div style={{ padding: '0.5rem 1rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.5rem',
          }}
        >
          <input type="checkbox" />
          <Title>{todo.title}</Title>
        </div>
        <Content style={{ marginBottom: '0.5rem' }}>{todo.content}</Content>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {todo.tagIds.map((tagId) => (
            <TodoTag key={tagId} tagId={tagId} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TodoItem;
