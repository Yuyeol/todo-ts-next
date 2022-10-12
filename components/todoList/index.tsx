import React from 'react';

type Props = {
  children: React.ReactNode;
};

const TodoList = ({ children }: Props) => {
  return <>{children}</>;
};

export default TodoList;
