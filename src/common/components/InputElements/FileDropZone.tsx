import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

type Props = { text: string; dropText: string }

const FileDropZone = ({ text, dropText }: Props) => {
  const onDrop = useCallback(<T extends File>(acceptedFiles: T[]) => {
    // Do something with the files
    console.log('accepted files: ', acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <StyledLabel>{dropText}</StyledLabel>
      ) : (
        <StyledLabel>{text}</StyledLabel>
      )}
    </Container>
  )
}

export default FileDropZone

const Container = styled.div`
  position: relative;
  width: 350px;
  height: 161px;
  display: flex;
  background-color: white;
  border: 2px dashed rgba(32, 32, 32, 0.04);
  border-radius: 12px;

  cursor: pointer;

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

  cursor: pointer;
`
