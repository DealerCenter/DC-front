import FileDropZone from '@/common/components/inputElements/FileDropZone'
import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'

import BasicButton from '@/common/components/appButton/BasicButton'

import plusIcon from '@/assets/icons/plusIconWhite.svg'
import uploadIcon from '@/assets/icons/fileUpload/uploadIconWithArrow.svg'
import uploadedIcon from '@/assets/icons/fileUpload/fileUploadedEmpty.svg'

type Props = {
  text?: string
  dropText?: string
  uploadedText?: string
  height?: number
  width?: number
  onDropAdditional?: (file: any) => void
  setIsUploaded?: (arg: boolean) => void
}

const ImagesUploadComponent = ({
  text,
  dropText,
  uploadedText,
  height,
  width,
  onDropAdditional,
  setIsUploaded,
}: Props) => {
  const t = useTranslations('')

  const [isDropped, setIsDropped] = useState(false)

  const onDrop = useCallback(
    <T extends File>(acceptedFiles: T[]) => {
      // Do something with the files
      console.log('accepted files: ', acceptedFiles)
      setIsDropped(true)
      setIsUploaded && setIsUploaded(true)
      if (onDropAdditional) onDropAdditional(acceptedFiles[0])
    },
    [onDropAdditional, setIsUploaded]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Container {...getRootProps()} width={width} height={height}>
      <Frame>
        <IconBox>
          <Image
            src={isDropped ? uploadedIcon : uploadIcon}
            alt='upload icon'
            height={30}
          />
        </IconBox>
        <input {...getInputProps()} />
        {isDropped ? (
          <Text isDropped={isDropped}>{uploadedText}</Text>
        ) : isDragActive ? (
          <Text>{dropText}</Text>
        ) : (
          <Text>{text}</Text>
        )}
        <BasicButton onClick={() => {}} padding={16} width={155}>
          <ButtonIcon>
            <Image src={plusIcon} alt='check icon' width={15} />
          </ButtonIcon>
          <ButtonText>{t('upload')}</ButtonText>
        </BasicButton>
      </Frame>
    </Container>
  )
}

export default ImagesUploadComponent

type TextProps = {
  isDropped?: boolean
}

const Text = styled.label<TextProps>`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};

  ${({ isDropped, theme }) =>
    isDropped
      ? css`
          color: ${theme.colors?.main_gray_100};
        `
      : css`
          color: ${theme.colors?.main_gray_56};
        `}

  cursor: pointer
`

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 174px;
  z-index: 1;
`

type ContainerProps = {
  width?: number
  height?: number
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors?.white};

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.radius?.lg};

  ${({ height }) => css`
    height: ${height}px;
  `}

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: 1200px;
          @media ${({ theme }) => theme.media?.md} {
            width: 960px;
          }
          @media ${({ theme }) => theme.media?.sm} {
            width: 343px;
          }
        `}

  border: 2px dashed ${({ theme }) => theme.colors?.main_gray_100};

  cursor: pointer;

  &:focus {
    border: none;
    outline: 4px solid ${({ theme }) => theme.colors?.sky_blue};
  }
`
const ButtonIcon = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  cursor: pointer;
`
const ButtonText = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  cursor: pointer;
`
