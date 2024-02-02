export interface UpdateTodoProps {
  title: string;
  onUpdateTodo: (event: React.FormEvent) => void;
  onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}
