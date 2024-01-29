export interface TodoType {
  userId: number;
  id: number;
  title: string;
  isComplete: boolean;
}

export interface StateType {
  toggleForm: boolean;
  todoUpdate: any;
}
