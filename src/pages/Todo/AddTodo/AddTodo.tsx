import { type Todo } from 'types/todoType';
import { useAddTodoMutation } from 'api/todoApi';
import { toast } from 'react-toastify';
import View from './AddTodo.view';
import { useState } from 'react';

const initialValue = { title: '', userId: 1, isComplete: false };

const AddTodo = () => {
  const [todo, setTodo] = useState<Pick<Todo, 'title'>>(initialValue);
  const [addTodo] = useAddTodoMutation();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (/^\s*$/.test(todo.title)) {
      toast.error('enter todo');
    } else {
      try {
        await addTodo(todo).unwrap();
        setTodo(initialValue);
      } catch {
        toast.error('cant save todo');
      }
    }
  };
  return (
    <View
      data={todo}
      onInputChange={handleChange}
      onSubmitTodo={handleSubmit}
    />
  );
};

export default AddTodo;
