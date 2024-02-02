export interface Todo {
  userId: number;
  id: number;
  title: string;
  isComplete: boolean;
}

export interface TodoState {
  toggleForm: boolean;
  todoUpdate: object;
}
