import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import StarRating from './StarRating'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/pilot/theme'

type Props = {
  customerImage: string
  customerName: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
}

const CustomerBox = ({ customerImage, customerName, rating, text }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <Container>
      <ImageAndNameBox>
        <ImageBox>
          <Image
            src={customerImage}
            alt='user image'
            width={isMobile ? 64 : 120}
            height={isMobile ? 64 : 120}
          />
        </ImageBox>
        <NameLabel>{customerName}</NameLabel>
      </ImageAndNameBox>
      <StarsAndTextBox>
        <StarRating rating={rating} />
        <Text>{text}</Text>
      </StarsAndTextBox>
    </Container>
  )
}

export default CustomerBox

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 584px;
  height: 243px;

  gap: ${({ theme }) => theme.spacing?.xl};

  padding: 40px;
  border-radius: 20px;

  border: 1px solid rgba(229, 244, 242, 1);

  box-shadow: 35px 30px 48px 0 rgba(51, 102, 255, 0.05);

  background-color: ${({ theme }) => theme.colors?.white};

  @media ${({ theme }) => theme.media?.md} {
    width: 464px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    padding: 24px;
    width: 240px;
    height: 295px;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing?.lg};
  }
`

const ImageAndNameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.xsm};
  }
`

const StarsAndTextBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  gap: ${({ theme }) => theme.spacing?.lg};
`

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;

  width: 120px;
  height: 120px;
  border-radius: 120px;
  overflow: hidden;

  @media ${({ theme }) => theme.media?.sm} {
    width: 64px;
    height: 64px;
  }
`

const NameLabel = styled.label`
  font-family: Poppins;
  font-size: 21px;
  font-weight: 600;
  text-align: center;

  color: rgba(17, 24, 39, 1);
`

const Text = styled.p`
  margin: 0;

  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};

  text-align: center;

  width: 295px;

  @media ${({ theme }) => theme.media?.md} {
    width: 174px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: 192px;
  }
`
