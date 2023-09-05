import styled, { css } from 'styled-components';
import { Button, Input } from './common';

export const AppWrapper = styled.div`
  width: 700px;
  margin: auto;
  margin-top: 50px;
  color: #737775;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 15px #0000001a;
  color: #FFFFFF;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #04395e;  
  padding: 10px;
  border-radius: 10px 10px 0 0;
`;

export const TodoInput = styled.div`
  border-radius: 5px;
  margin-top: 10px;
  background-color: #04395e;
  display: flex;
  padding: 5px;

  & * {
    border-radius: 5px;
  }
`;

export const SCButton = styled(Button)`
  font-size: 18px;
  text-transform: uppercase;
  color: #ffffff;
  margin-left: 10px;
  padding: 5px;
`;

export const SCInput = styled(Input)`
  font-size: 18px;
`;

export const FilterWrapper = styled.div`
  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

export const TextComponent = styled.span<{
  active?: boolean;
}>`
  cursor: pointer;
  padding: 5px;

  ${({ active }) => active && css`
    border: 1px solid #FFFFFF;
    border-radius: 5px;
  `}
`;
