import { useDeleteTodoMutation } from 'api/todoApi';
import View from './SingleTodoCard.view';
import { useState } from 'react';
import { type TodoCardInterface } from './SingleTodoCard.type';
import { useDispatch } from 'react-redux';

import { toggleInputForm } from 'slice/todoSlice';

const SingleTodoCard = ({ todo }: TodoCardInterface) => {
  const dispatch = useDispatch();
  const [done, setDone] = useState(false);
  const [deleteTodo] = useDeleteTodoMutation();
  const handlerDone = () => {
    setDone(!done);
  };

  const handleUpdate = () => {
    dispatch(toggleInputForm({ todo }));
  };

  return (
    <View
      todo={todo}
      onDone={handlerDone}
      isDone={done}
      onDelete={deleteTodo}
      onUpdate={handleUpdate}
    />
  );
};

export default SingleTodoCard;
