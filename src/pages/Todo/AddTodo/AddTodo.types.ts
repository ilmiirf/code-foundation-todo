import { type TodoType } from 'types/todoType';

export interface AddTodoInterface {
  data: Pick<TodoType, 'title'>;
  onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitTodo: (event: React.FormEvent) => void;
}
