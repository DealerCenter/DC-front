import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled, { css } from 'styled-components'
import uploadIcon from '@/assets/icons/FileUpload.svg'
import Image from 'next/image'

type Props = { text: string; dropText: string; uploadedText: string }

const FileDropZone = ({ text, dropText, uploadedText }: Props) => {
  const [isDropped, setIsDropped] = useState(false)

  const onDrop = useCallback(<T extends File>(acceptedFiles: T[]) => {
    // Do something with the files
    console.log('accepted files: ', acceptedFiles)
    setIsDropped(true)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Container {...getRootProps()}>
      <IconBox>
        <Image src={uploadIcon} alt='upload icon' width={22.95} height={25} />
      </IconBox>
      <input {...getInputProps()} />
      {isDropped ? (
        <StyledLabel isDropped={isDropped}>{uploadedText}</StyledLabel>
      ) : isDragActive ? (
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

type LabelProps = {
  isDropped?: boolean
}

const StyledLabel = styled.label<LabelProps>`
  ${({ isDropped }) =>
    isDropped
      ? css`
          color: rgba(32, 32, 32, 1);
        `
      : css`
          color: rgba(18, 18, 20, 0.56);
        `}

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
