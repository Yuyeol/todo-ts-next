import Seo from 'components/Seo';
import TodoList from 'components/todoList';
import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { todoState } from 'states';

const Home: NextPage = () => {
  const [todos] = useRecoilState(todoState);
  return (
    <div>
      <Box />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
