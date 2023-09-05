import { useMemo, useState } from 'react';
import { TodoElement } from './components/Todo';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { todoActions } from './store/todoSlice';
import {
  AppWrapper,
  FilterWrapper,
  Header,
  SCButton,
  SCInput,
  TextComponent,
  TodoInput,
} from './styled';

enum Filter {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed'
}

const App = () => {
  const todos = useAppSelector((state) => state.todosReducer.todos);
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState(Filter.ALL);

  const addTodo = () => {
    if (inputValue.trim().length) {
      dispatch(todoActions.addTodo({ text: inputValue.trim() }));
      setInputValue('');
    }
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
    case Filter.ACTIVE:
      return todos.filter((todo) => !todo.completed);
    case Filter.COMPLETED:
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
    }
  }, [filter, todos]);

  const activeTodosCount = useMemo(() => todos.filter((t) => !t.completed).length, [todos]);

  return (
    <AppWrapper>
      <Header>
        <TextComponent>{`${activeTodosCount} items left`}</TextComponent>
        <FilterWrapper>
          {Object.values(Filter).map((f) => (
            <TextComponent
              active={f === filter}
              onClick={() => setFilter(f)}
            >
              {f}
            </TextComponent>
          ))}
        </FilterWrapper>
        <TextComponent
          onClick={() => dispatch(todoActions.clearCompleted())}
        >
          Clear completed
        </TextComponent>
      </Header>
      {filteredTodos.map((todo) => (
        <TodoElement key={todo.id} todo={todo} />
      ))}
      <TodoInput>
        <SCInput
          onChange={(e) => setInputValue(e.currentTarget.value)}
          value={inputValue}
          type="text"
        />
        <SCButton
          onClick={addTodo}
        >
          ADD
        </SCButton>
      </TodoInput>
    </AppWrapper>
  );
};

export default App;
