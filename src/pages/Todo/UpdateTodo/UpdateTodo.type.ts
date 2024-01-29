export interface UpdateTodoViewInterface {
  title: string;
  onUpdateTodo: (event: React.FormEvent) => void;
  onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}
