import { type TodoType } from 'types/todoType';

export interface TodoInterface {
  todos: TodoType[] | undefined;
  toggleForm: boolean;
}
