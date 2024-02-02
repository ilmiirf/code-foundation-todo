import { type Todo } from 'types/todoType';

export interface TodoProps {
  todos: Todo[] | undefined;
  toggleForm: boolean;
}
