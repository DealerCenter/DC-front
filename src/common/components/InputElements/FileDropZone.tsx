import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import uploadIcon from '@/app/assets/icons/FileUpload.svg'
import Image from 'next/image'

type Props = { text: string; dropText: string }

const FileDropZone = ({ text, dropText }: Props) => {
  const onDrop = useCallback(<T extends File>(acceptedFiles: T[]) => {
    // Do something with the files
    console.log('accepted files: ', acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Container {...getRootProps()}>
      <IconBox>
        <Image src={uploadIcon} alt='upload icon' width={22.95} height={25} />
      </IconBox>
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
  box-sizing: border-box;
  position: relative;
  width: 350px;
  height: 161px;
  display: flex;
  justify-content: center;

  background-color: white;
  border: 2px dashed rgba(32, 32, 32, 0.04);
  border-radius: 12px;
  padding: 16px;

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

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: rgba(32, 32, 32, 0.04);
  width: 60px;
  height: 60px;
`
