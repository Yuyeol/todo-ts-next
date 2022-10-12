import styled from '@emotion/styled';
import TodoTag, { TagProps } from 'components/todoList/TodoTag';
import { useState } from 'react';
import { Common } from 'styles/GlobalStyle';

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

const DateInput = styled.div`
  display: flex;
  align-items: center;
`;
const TitleInput = styled.div`
  input {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background: ${Common.colors.grey100};
    margin: 0.5rem 0;
    box-shadow: ${Common.shadows.main};
  }
`;
const ContentInput = styled.div`
  textArea {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background: ${Common.colors.grey100};
    margin: 0.5rem 0;
    height: 300px;
    box-shadow: ${Common.shadows.main};
  }
`;

const AddButton = styled.div`
  background: ${Common.colors.point};
  width: 120px;
  text-align: center;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  margin: 0 auto;
  box-shadow: ${Common.shadows.main};
`;

interface Props {
  tags: TagProps[];
}

const TodoInput = ({ tags }: Props) => {
  const [isTagOpen, setIsTagOpen] = useState(false);
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
        할 일 작성
      </Header>

      <div style={{ padding: '0.5rem 1rem' }}>
        <DateInput>
          <div style={{ marginRight: '0.5rem' }}>날짜</div>
          <input type="date" />
        </DateInput>
        <TitleInput>
          <input placeholder="제목" />
        </TitleInput>
        <ContentInput>
          <textarea placeholder="할 일" />
        </ContentInput>

        <div
          onClick={() => setIsTagOpen(!isTagOpen)}
          style={{
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          태그{' '}
          <div
            style={{
              marginLeft: '0.5rem',
              fontSize: '12px',
              background: Common.colors.grey100,
              borderRadius: '999px',
              padding: '0.1rem 0.3rem',
              boxShadow: Common.shadows.main,
            }}
          >
            {isTagOpen ? '닫기▼' : '열기▲'}
          </div>
        </div>
        {isTagOpen && (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {tags.map((tag) => (
              <TodoTag key={tag.id} tag={tag} />
            ))}
          </div>
        )}

        <AddButton>할 일 추가</AddButton>
      </div>
    </Container>
  );
};

export default TodoInput;
