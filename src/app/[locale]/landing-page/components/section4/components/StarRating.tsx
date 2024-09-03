import React from 'react'
import styled from 'styled-components'

import starIcon from '@/assets/icons/ratingStar.svg'
import starIconEmpty from '@/assets/icons/ratingStarEmpty.svg'
import Image from 'next/image'

type Props = { rating: 1 | 2 | 3 | 4 | 5 }

const StarRating = ({ rating }: Props) => {
  const dummyArray = Array(5).fill(0)

  console.log(dummyArray)

  return (
    <Container>
      {dummyArray.map((_, i) => (
        <Icon key={`starRatingIcon${i}`}>
          <Image
            src={i + 1 <= rating ? starIcon : starIconEmpty}
            alt='star icon'
          />
        </Icon>
      ))}
    </Container>
  )
}

export default StarRating

const Container = styled.div`
  display: flex;
  flex-direction: row;

  gap: 5px;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  height: 24px;
  width: 24px;
`
