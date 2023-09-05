export interface TodoSchema {
  value: string;
  id: number;
  completed: boolean;
}

export interface TodosSchema {
  todos: Array<TodoSchema>;
}
