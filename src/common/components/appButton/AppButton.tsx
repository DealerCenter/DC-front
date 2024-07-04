import React from "react";
import styled from "styled-components";

type ButtonTypes = "filled" | "outlined";

type Props = { text: string; type: ButtonTypes; disabled: boolean };

const AppButton = ({ text, type, disabled }: Props) => {
  return (
    <StyledButton disabled={disabled} type={type}>
      {text}
    </StyledButton>
  );
};

export default AppButton;

const StyledButton = styled.button<{ type?: string }>`
  background-color: ${(props) =>
    props.disabled && props.type === "filled"
      ? "rgba(32, 32, 32, 0.26)"
      : props.disabled && props.type === "outlined"
      ? "transparent"
      : !props.disabled && props.type === "filled"
      ? "rgba(32, 32, 32, 1)"
      : !props.disabled && props.type === "outlined"
      ? "transparent"
      : ""};

  border: ${(props) =>
    props.type === "filled"
      ? "none"
      : props.type === "outlined"
      ? "1px solid rgba(32, 32, 32, 0.56)"
      : "red"};

  color: ${(props) =>
    props.type === "filled"
      ? "white"
      : !props.disabled && props.type === "outlined"
      ? "rgba(32, 32, 32, 1)"
      : "rgba(32, 32, 32, 0.56)"};

  height: 56px;
  width: 350px;
  font-size: 16px;
  line-height: 33.6px;
  font-weight: 700;
  border-radius: 12px;

  &:active {
    background-color: ${(props) =>
      props.type === "filled"
        ? "rgba(32, 32, 32, 0.68)"
        : "rgba(32, 32, 32, 0.1)"};
  }

  &:focus {
    border: none;
    outline: 4px solid rgba(216, 226, 244, 1);
  }
`;
