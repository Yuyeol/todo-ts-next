import { atom } from 'recoil';

export const todoState = atom({
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
        { id: '1', name: '1', font: '#FFFFFF', background: '#000000' },
        { id: '2', name: '2', font: '#FFFFFF', background: '#000000' },
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
        { id: '1', name: '1', font: '#FFFFFF', background: '#000000' },
        { id: '2', name: '2', font: '#FFFFFF', background: '#000000' },
      ],
    },
  ],
});
