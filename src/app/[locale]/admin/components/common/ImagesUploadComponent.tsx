import FileDropZone from '@/common/components/InputElements/FileDropZone'
import React, { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'

import BasicButton from '@/common/components/appButton/BasicButton'

import plusIcon from '@/assets/icons/plusIconWhite.svg'
import uploadIcon from '@/assets/icons/fileUpload/uploadIconWithArrow.svg'
import uploadedIcon from '@/assets/icons/fileUpload/fileUploadedEmpty.svg'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../create-order/hooks/useCreateOrderContext'
import { IMAGE_LOCATIONS } from '@/common/helpers/constants'
import ImagesComponent from '@/app/[locale]/dealer/order-details/components/ImagesComponent'

type Props = {
  text?: string
  dropText?: string
  uploadedText?: string
  height?: number
  width?: number
  onDropAdditional?: (file: any) => void
  setIsUploaded?: (arg: boolean) => void
  isDisabled?: boolean
  currentLocation?: IMAGE_LOCATIONS
}

const ImagesUploadComponent = ({
  text,
  dropText,
  uploadedText,
  height,
  width,
  onDropAdditional,
  setIsUploaded,
  isDisabled,
  currentLocation,
}: Props) => {
  const t = useTranslations('')

  const [isDropped, setIsDropped] = useState(false)

  const { setFieldValue, values, setTowTruckImage, setImages, images } =
    useCreateOrderContext()

  const onDrop = useCallback(
    <T extends File>(acceptedFiles: T[]) => {
      setImages(
        (prev: {
          [IMAGE_LOCATIONS.TOW_TRUCK]: []
          [IMAGE_LOCATIONS.ABROAD_PORT]: []
          [IMAGE_LOCATIONS.CONTAINER]: []
          [IMAGE_LOCATIONS.HOME_PORT]: []
        }) => {
          return {
            ...prev,
            [String(currentLocation)]: [
              // @ts-ignore
              ...(prev[currentLocation] ?? []),
              ...acceptedFiles,
            ],
          }
        }
      )
      setIsDropped(true)
    },
    [
      onDropAdditional,
      setIsUploaded,
      setFieldValue,
      currentLocation,
      setTowTruckImage,
    ]
  )

  useEffect(() => {
    console.log('currentLocation: ', currentLocation)
  }, [currentLocation])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    onDrop,
    disabled: isDisabled,
  })

  const removeImage = (id: number) => {
    // @ts-ignore
    const newBlobsArray = [...images[currentLocation]]
    newBlobsArray.splice(id, 1)

    console.log('neww', newBlobsArray)

    setImages(
      (prev: {
        [IMAGE_LOCATIONS.TOW_TRUCK]: []
        [IMAGE_LOCATIONS.ABROAD_PORT]: []
        [IMAGE_LOCATIONS.CONTAINER]: []
        [IMAGE_LOCATIONS.HOME_PORT]: []
      }) => {
        return {
          ...prev,
          [String(currentLocation)]: [...newBlobsArray],
        }
      }
    )
  }

  return (
    <>
      <Container {...getRootProps()} width={width ?? 0} height={height ?? 0}>
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
          <BasicButton
            onClick={() => {}}
            padding={16}
            width={155}
            isDisabled={isDisabled}
          >
            <ButtonIcon>
              <Image src={plusIcon} alt='check icon' width={15} />
            </ButtonIcon>
            <ButtonText>{t('upload')}</ButtonText>
          </BasicButton>
        </Frame>
      </Container>
      {/* @ts-ignore */}
      {images?.[currentLocation]?.length > 0 && (
        <ImagesComponent
          onRemoveImage={removeImage}
          // @ts-ignore
          carImages={images[currentLocation]?.map((file, idx) => {
            return {
              id: idx,
              url: URL.createObjectURL(file),
            }
          })}
        />
      )}
    </>
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
