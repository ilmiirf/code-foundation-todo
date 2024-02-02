import { type Todo } from 'types/todoType';

export interface AddTodoProps {
  data: Pick<Todo, 'title'>;
  onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitTodo: (event: React.FormEvent) => void;
}
