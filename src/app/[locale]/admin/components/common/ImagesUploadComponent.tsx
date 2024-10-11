import FileDropZone from '@/common/components/inputElements/FileDropZone'
import React from 'react'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import BasicButton from '@/common/components/appButton/BasicButton'

import uploadIcon from '@/assets/icons/fileUpload/uploadIconWithArrow.svg'
import plusIcon from '@/assets/icons/plusIconWhite.svg'

type Props = { onClick: () => void; width?: number; height?: number }

const ImagesUploadComponent = ({ onClick, width, height }: Props) => {
  const t = useTranslations('')

  return (
    <Container width={width} height={height}>
      <Frame>
        <IconBox>
          <Image src={uploadIcon} alt='upload icon' />
        </IconBox>
        <Text>{t('add photos of vehicle')}</Text>{' '}
        <BasicButton onClick={onClick} padding={16} width={155}>
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

const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
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

  //CSS for Dashed border

  --b: 2px; /* border thickness */
  --s: 40px; /* size of the dashes */
  --c1: ${({ theme }) => theme.colors?.white};
  --c2: ${({ theme }) => theme.colors?.main_gray_100};

  position: relative;

  :before {
    content: '';
    position: absolute;
    inset: 0;
    padding: var(--b);
    background: repeating-conic-gradient(var(--c1) 0 25%, var(--c2) 0 50%) 0 0 /
      var(--s) var(--s) round;
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
    border-radius: 12px;
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
