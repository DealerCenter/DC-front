import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/pilot/theme'

import DashedContainer from '@/common/components/emptyComponents/DashedContainer'

import pdfIconXL from '@/assets/icons/pdfIconXL.svg'

type Props = { image?: string }

const PdfAndImageBox = ({ image }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  const imageWidth = isMobile ? 294 : isTablet ? 221 : 400
  const imageHeight = isMobile ? 239 : 349

  return (
    <Container>
      {image ? (
        <PdfAndImageFrame>
          <Image
            src={image}
            alt='user image'
            width={imageWidth}
            height={imageHeight}
            style={{ objectFit: 'cover' }}
          />
        </PdfAndImageFrame>
      ) : (
        <DashedContainer>
          <PdfAndImageFrame>
            <IconBox>
              <Image src={pdfIconXL} alt='pdf icon' />
            </IconBox>
            <PdfLabel>{t('click document to download')}</PdfLabel>
          </PdfAndImageFrame>
        </DashedContainer>
      )}
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

  border-radius: ${({ theme }) => theme.radius?.lg};
  overflow: hidden;
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
  width: unset;
  text-align: center;

  @media ${({ theme }) => theme.media?.md} {
    height: 145px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    height: 90px;
    width: 274px;
  }
`
