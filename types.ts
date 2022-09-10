export type TagProps = {
  id: string;
  name: string;
  font: string;
  background: string;
};

export type TodoProps = {
  id: string;
  title: string;
  content: string;
  createDate: string;
  modifyDate: string;
  dueDate: string;
  completeDate: string;
  isComplete: boolean;
  tags: TagProps[];
};
