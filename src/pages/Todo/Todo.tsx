import { useGetTodosQuery } from 'api/todoApi';
import View from './Todo.view';
import { useSelector } from 'react-redux';
import { type RootState } from 'init/store/store';

const TodoPage = () => {
  const toggleForm = useSelector((state: RootState) => state.todo.toggleForm);
  console.log(toggleForm);
  const { data: todos } = useGetTodosQuery();
  return <View data={todos} toggleForm={toggleForm} />;
};

export default TodoPage;
