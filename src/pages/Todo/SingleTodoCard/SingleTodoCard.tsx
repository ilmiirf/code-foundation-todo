import { useDeleteTodoMutation, useUpdateTodoMutation } from 'api/todoApi';
import View from './SingleTodoCard.view';
import { type TodoCardInterface } from './SingleTodoCard.type';
import { useDispatch } from 'react-redux';

import { toggleInputForm } from 'slice/todoSlice';

const SingleTodoCard = ({ todo }: TodoCardInterface) => {
  const [updateTodo] = useUpdateTodoMutation();
  const dispatch = useDispatch();
  // const [done, setDone] = useState(todo.isComplete);
  const [deleteTodo] = useDeleteTodoMutation();
  const handlerUpdateDone = async () => {
    await updateTodo({ ...todo, isComplete: !todo.isComplete });
  };

  const handleUpdate = () => {
    dispatch(toggleInputForm({ todo }));
  };

  return (
    <View
      todo={todo}
      onDone={handlerUpdateDone}
      isDone={todo.isComplete}
      onDelete={deleteTodo}
      onUpdate={handleUpdate}
    />
  );
};

export default SingleTodoCard;
