import { TodoProps } from 'components/todoList/TodoItem';
import { TagProps } from 'components/todoList/TodoTag';
import { atom } from 'recoil';

export const todoState = atom<TodoProps[]>({
  key: 'todoState',
  default: [
    {
      id: '1',
      title: '제목',
      content: '내용',
      createDate: '2022-06-06',
      modifyDate: '2022-06-06',
      dueDate: '2022-06-06',
      completeDate: '2022-06-06',
      isComplete: false,
      tags: [
        {
          id: '1',
          name: '1',
          fontColor: '#FFFFFF',
          backgroundColor: '#000000',
        },
        {
          id: '2',
          name: '2',
          fontColor: '#FFFFFF',
          backgroundColor: '#000000',
        },
      ],
    },
    {
      id: '2',
      title: '제목',
      content: '내용',
      createDate: '2022-06-06',
      modifyDate: '2022-06-06',
      dueDate: '2022-06-06',
      completeDate: '2022-06-06',
      isComplete: false,
      tags: [
        {
          id: '1',
          name: '1',
          fontColor: '#FFFFFF',
          backgroundColor: '#000000',
        },
        {
          id: '2',
          name: '2',
          fontColor: '#FFFFFF',
          backgroundColor: '#000000',
        },
      ],
    },
  ],
});
export const tagState = atom<TagProps[]>({
  key: 'tagState',
  default: [
    {
      id: '1',
      name: '잡생각',
      fontColor: '#FFFFFF',
      backgroundColor: '#000000',
    },
    {
      id: '2',
      name: '옷',
      fontColor: '#FFFFFF',
      backgroundColor: '#000000',
    },
  ],
});
