import styled from '@emotion/styled';
import TodoTag from 'components/todoList/TodoTag';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { tagIdsState, todoIdsState, todoItemState } from 'states';
import { Common } from 'styles/GlobalStyle';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

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

const TodoInput = () => {
  const router = useRouter();
  const [todoIds, setTodoIds] = useRecoilState(todoIdsState);
  const [newTodoId, setNewTodoId] = useState('');
  const setTodo = useSetRecoilState(todoItemState(newTodoId));

  const tagIds = useRecoilValue(tagIdsState);
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
    dueDate: '',
  });
  const [addedTagIds, setAddedTagIds] = useState<string[]>([]);
  const [isTagOpen, setIsTagOpen] = useState(false);
  const date = dayjs().format('YYYY-MM-DD');

  const handleInput = useCallback(
    (e: { target: { value: string; name: string } }) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    },
    [inputs],
  );
  const handleSelectTag = useCallback(
    (id: string) => {
      const selectedTagId = tagIds.find((tagId) => tagId === id);
      const duplicateTagId = addedTagIds?.find((tagId) => tagId === id);
      selectedTagId &&
        (duplicateTagId
          ? setAddedTagIds(addedTagIds.filter((tagId) => tagId !== id))
          : setAddedTagIds([...addedTagIds, selectedTagId]));
    },
    [addedTagIds, tagIds],
  );

  const handleSubmit = useCallback(() => {
    setTodoIds(() => [...todoIds, newTodoId]);
    setTodo({
      id: newTodoId,
      createDate: date,
      ...inputs,
      isComplete: false,
      completeDate: '',
      modifyDate: '',
      tagIds: addedTagIds,
    });
    router.push('/');
  }, [
    setTodoIds,
    setTodo,
    newTodoId,
    date,
    inputs,
    addedTagIds,
    router,
    todoIds,
  ]);
  useEffect(() => {
    const id = nanoid();
    setNewTodoId(id);
  }, []);
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
        <TitleInput>
          <input
            name="title"
            placeholder="제목"
            onChange={handleInput}
            value={inputs.title}
          />
        </TitleInput>
        <ContentInput>
          <textarea
            name="content"
            placeholder="할 일"
            onChange={handleInput}
            value={inputs.content}
          />
        </ContentInput>
        <DateInput>
          <div style={{ marginRight: '0.5rem' }}>마감일</div>
          <input name="dueDate" type="date" onChange={handleInput} />
        </DateInput>
        <div
          onClick={() => setIsTagOpen(!isTagOpen)}
          style={{
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          태그
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
            {tagIds.map((tagId) => (
              <div key={tagId} onClick={() => handleSelectTag(tagId)}>
                <TodoTag
                  tagId={tagId}
                  isSelected={
                    !!addedTagIds.find((addedTagId) => addedTagId === tagId)
                  }
                />
              </div>
            ))}
          </div>
        )}
        <AddButton onClick={handleSubmit}>할 일 추가</AddButton>
      </div>
    </Container>
  );
};

export default TodoInput;
