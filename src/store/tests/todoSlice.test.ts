import { todoActions, todoReducer } from '../todoSlice';

describe('todoSlice', () => {
  it('should return defatult state', () => {
    const result = todoReducer(undefined, { type: '' });

    expect(result).toEqual({ todos: [] });
  });

  it('should add new todo', () => {
    const action = {
      type: todoActions.addTodo.type,
      payload: { text: 'test add todo' },
    };

    const result = todoReducer({ todos: [] }, action);

    expect(result.todos[0].value).toBe('test add todo');
  });

  it('should remove todo', () => {
    const action = {
      type: todoActions.removeTodo.type,
      payload: { id: 123 },
    };

    const result = todoReducer({
      todos: [{
        completed: false,
        id: 123,
        value: 'test',
      }],
    }, action);

    expect(result.todos).toEqual([]);
  });

  it('should toggle todo complete', () => {
    const action = {
      type: todoActions.toggleTodoComplete.type,
      payload: { id: 123 },
    };

    const result = todoReducer({
      todos: [{
        completed: false,
        id: 123,
        value: 'test',
      }],
    }, action);

    expect(result.todos[0].completed).toBe(true);
  });
});
