import { type TodoType } from '@/types/todoType';

export interface TodoCardInterface {
  todo: TodoType;
}

export interface TodoCardViewInterface extends TodoCardInterface {
  onDone: (e: React.FormEvent) => void;
  isDone: boolean;
  onDelete: (id: number) => void;
  onUpdate: () => void;
}
