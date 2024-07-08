import React from 'react'
import styled from 'styled-components'

type Props = { children: string }

const FileInput = ({ children }: Props) => {
  return (
    <Container>
      <StyledFileInput type='file'></StyledFileInput>
      <StyledLabel>{children}</StyledLabel>
    </Container>
  )
}

export default FileInput

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 350px;
  height: 161px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`

const StyledFileInput = styled.input`
  box-sizing: border-box;
  background-color: white;
  border: 2px dashed rgba(32, 32, 32, 0.04);
  width: 350px;
  height: 161px;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;

  cursor: pointer;

  &::placeholder {
    color: rgba(18, 18, 20, 0.56);
  }

  &:focus {
    border: none;
    outline: 4px solid rgba(216, 226, 244, 1);
  }
`

const StyledLabel = styled.label`
  color: rgba(18, 18, 20, 0.56);
  font-size: 16px;
  line-height: 19.2px;
  position: absolute;
  bottom: 10.5px;
  padding: 16px;
  text-align: center;
`
