import React from 'react';

interface Props {
  children: React.ReactNode;
}

const TodoList = ({ children }: Props) => {
  return <>{children}</>;
};

export default TodoList;
