import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosSchema } from './types/TodoSchema';

const initialState: TodosSchema = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, actions: PayloadAction<{text: string;}>) => {
      state.todos.push({
        value: actions.payload.text,
        id: new Date().getTime(),
        completed: false,
      });
    },
    removeTodo: (state, actions: PayloadAction<{id: number;}>) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload.id);
    },
    toggleTodoComplete: (state, actions: PayloadAction<{id: number;}>) => {
      const todo = state.todos.find((t) => t.id === actions.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((t) => !t.completed);
    },
  },
});

export const { actions: todoActions } = todoSlice;
export const { reducer: todoReducer } = todoSlice;
