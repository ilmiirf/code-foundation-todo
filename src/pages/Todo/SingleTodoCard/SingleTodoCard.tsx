import { useDeleteTodoMutation, useUpdateTodoMutation } from 'api/todoApi';
import View from './SingleTodoCard.view';
import { type TodoData } from './SingleTodoCard.type';
import { useDispatch } from 'react-redux';
import { toggleInputForm } from 'slice/todoSlice';
import { useCallback } from 'react';

const SingleTodoCard = ({ todo }: TodoData) => {
  const [updateTodo] = useUpdateTodoMutation();
  const dispatch = useDispatch();
  const [deleteTodo] = useDeleteTodoMutation();

  const handlerUpdateDone = useCallback(async () => {
    await updateTodo({ ...todo, isComplete: !todo.isComplete });
  }, [todo.isComplete]);

  const handleUpdate = useCallback(() => {
    dispatch(toggleInputForm({ todo }));
  }, [todo]);

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
