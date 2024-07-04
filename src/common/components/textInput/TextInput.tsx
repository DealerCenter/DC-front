import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

type Props = {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: ChangeEventHandler<HTMLInputElement>;
};

const TextInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
}: Props) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default TextInput;

const StyledInput = styled.input`
  box-sizing: border-box;
  background-color: white;
  border: none;
  outline: 2px solid rgba(32, 32, 32, 0.04);
  outline-offset: 2px;
  width: 350px;
  height: 52px;
  padding: 10px 10px 10px 16px;
  border-radius: 12px;

  &:focus {
    border: none;
    outline: 4px solid rgba(216, 226, 244, 1);
  }
`;
