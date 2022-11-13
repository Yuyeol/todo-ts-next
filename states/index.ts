import { atom, selector } from 'recoil';

export interface TTodo {
  id: string;
  title: string;
  content: string;
  createDate: string;
  modifyDate: string;
  dueDate: string;
  completeDate: string;
  isComplete: boolean;
  tags: TTag[];
}

export interface TTag {
  id: string;
  name: string;
  fontColor: string;
  backgroundColor: string;
}

export const todoListState = atom<TTodo[]>({
  key: 'todoListState',
  default: [
    {
      id: '1',
      title: '제목',
      content: '내용',
      createDate: '2022-06-06',
      modifyDate: '2022-06-06',
      dueDate: '2022-06-06',
      completeDate: '2022-06-06',
      isComplete: true,
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

export const SHOW_ALL = 'Show All';
export const SHOW_COMPLETED = 'Show Completed';
export const SHOW_UNCOMPLETED = 'Show Uncompleted';

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: SHOW_ALL,
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case SHOW_COMPLETED:
        return list.filter((item) => item.isComplete);
      case SHOW_UNCOMPLETED:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const tagState = atom<TTag[]>({
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
