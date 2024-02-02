import { type Todo } from '@/types/todoType';

export interface TodoData {
  todo: Todo;
}

export interface TodoCardProps extends TodoData {
  onDone: (e: React.FormEvent) => void;
  isDone: boolean;
  onDelete: (id: number) => void;
  onUpdate: () => void;
}
