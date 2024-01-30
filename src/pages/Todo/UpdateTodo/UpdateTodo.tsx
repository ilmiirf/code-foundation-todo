import { useUpdateTodoMutation } from 'api/todoApi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import View from './UpdateTodo.view';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from 'init/store/store';
import { toggleInputForm } from '@/dataservices/slice/todoSlice';

const UpdateTodo = () => {
  const todoToUpdate = useSelector((state: RootState) => state.todo.todoUpdate);
  const [updateTodo] = useUpdateTodoMutation();
  const [todo, setTodo] = useState(todoToUpdate.todo);
  const dispatch = useDispatch();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev: object) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleUpdateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (/^\s*$/.test(todo.title)) {
      toast.error('enter todo');
    } else {
      try {
        await updateTodo(todo);
        dispatch(toggleInputForm({ todo }));
      } catch {
        toast.error('cant save todo');
      }
    }
  };

  return (
    <View
      title={todo.title}
      onUpdateTodo={handleUpdateTodo}
      onInputChange={handleChange}
      // setUpdate={setUpdate}
    />
  );
};

export default UpdateTodo;
