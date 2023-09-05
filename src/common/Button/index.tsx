/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, HTMLProps } from 'react';
import { SCButton } from './styled';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  ...props
}) => (
  <SCButton
    {...props}
    onClick={onClick}
    type="button"
  >
    {children}
  </SCButton>
);
