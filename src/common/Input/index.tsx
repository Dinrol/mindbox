/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, HTMLProps } from 'react';
import { SCInput } from './styled';

type InputProps = HTMLProps<HTMLInputElement>;

export const Input: FC<InputProps> = ({
  onChange,
  ...props
}) => (
  <SCInput
    {...props}
    type="text"
    onChange={onChange}
  />
);
