/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../store/hooks';
import { todoActions } from '../../store/todoSlice';
import { TodoSchema } from '../../store/types/TodoSchema';

const SCTodo = styled.div<{ done: boolean; }>`
  display: flex;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  justify-content: space-between;
  background-color: ${(props) => (props.done ? '#00000027' : '')};
  color: #04395e;

  p {
    color: ${(props) => (props.done ? '#00000050' : 'initial')};
  }

  &:hover {
    background-color: #04395e3d;
  }
`;

const ActionBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #04395e3d;
    border-radius: 5px;
  }
`;

interface TaskProps {
  todo: TodoSchema;
}

export const TodoElement: React.FC<TaskProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const {
    completed,
    id,
    value,
  } = todo;

  return (
    <SCTodo done={completed}>
      <p>{value}</p>
      <ActionBtn>
        {!completed ? (
          <span
            aria-label="done"
            role="img"
            onClick={() => dispatch(todoActions.toggleTodoComplete({ id }))}
          >
            ✔️
          </span>
        ) : (
          <span
            aria-label="delete"
            role="img"
            onClick={() => dispatch(todoActions.removeTodo({ id }))}
          >
            ❌
          </span>
        )}
      </ActionBtn>
    </SCTodo>
  );
};
