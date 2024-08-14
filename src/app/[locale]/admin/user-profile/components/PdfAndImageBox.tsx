import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import DashedContainer from '@/common/components/emptyComponents/DashedContainer'

import pdfIconXL from '@/assets/icons/pdfIconXL.svg'
import { useTranslations } from 'next-intl'

type Props = {}

const PdfAndImageBox = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <DashedContainer>
        <PdfAndImageFrame>
          <IconBox>
            <Image src={pdfIconXL} alt='pdf icon' />
          </IconBox>
          <PdfLabel>{t('click document to download')}</PdfLabel>
        </PdfAndImageFrame>
      </DashedContainer>
    </Container>
  )
}

export default PdfAndImageBox

const Container = styled.div`
  border-radius: ${({ theme }) => theme.radius?.lg};
  background-color: ${({ theme }) => theme.colors?.white};
  padding: ${({ theme }) => theme.spacing?.xl};
`

const PdfAndImageFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 400px;
  height: 349px;

  @media ${({ theme }) => theme.media?.md} {
    width: 221px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: 294px;
    height: 239px;
  }
`

const IconBox = styled.div`
  height: 247px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.media?.md} {
    height: 145px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    height: 90px;
  }
`

const PdfLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_68};
  height: 44px;

  @media ${({ theme }) => theme.media?.md} {
    height: 145px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    height: 90px;
  }
`
