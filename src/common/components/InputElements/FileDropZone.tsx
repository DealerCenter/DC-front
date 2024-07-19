import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled, { css } from 'styled-components'
import Image from 'next/image'
import uploadIcon from '@/assets/icons/FileUpload.svg'
import warningIcon from '@/assets/icons/warningEmpty.svg'

type Props = {
  text: string
  dropText: string
  uploadedText: string
  warningText: string
}

const FileDropZone = ({ text, dropText, uploadedText, warningText }: Props) => {
  const [isDropped, setIsDropped] = useState(false)

  const onDrop = useCallback(<T extends File>(acceptedFiles: T[]) => {
    // Do something with the files
    console.log('accepted files: ', acceptedFiles)
    setIsDropped(true)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
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
      {warningText && (
        <UploadIdTextBox>
          <Image
            src={warningIcon}
            alt='warning icon'
            width={24}
            height={24}
          ></Image>
          <Text>{warningText}</Text>
        </UploadIdTextBox>
      )}
    </>
  )
}

export default FileDropZone

const Text = styled.div`
  color: rgba(32, 32, 32, 0.56);
  font-size: 13px;
  line-height: 15.6px;
  font-weight: 400;
`

const UploadIdTextBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  width: 350px;
`

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
