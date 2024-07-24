import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import CarDetailsBox from './CarDetailsBox'
import DebtBox from './DebtBox'
import UserInfoBox from './UserInfoBox'
import SippingStateBox from './SippingStateBox'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

type Props = { imageLink: string; isArrived: boolean }

const OrderListItem = ({ imageLink, isArrived }: Props) => {
  const isHiddenCustom = useMediaQuery({
    query: '(max-width: 1250px) and (min-width: 900px)',
  })
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <Container>
      <Frame>
        <CarDetailsBox imageLink={imageLink} />
        <MiddleFrame>
          <UserInfoBox isArrived={isArrived} />
          {isHiddenCustom || <SippingStateBox />}
        </MiddleFrame>
      </Frame>
      <DebtBox amount={5750} isArrived={isArrived} />
    </Container>
  )
}

export default OrderListItem

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 212px;
  border: 0px;
  border-bottom: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors?.main_gray_04};
  padding: ${({ theme }) => theme.spacing?.md};
  flex: 1;

  /* padding: 0 15%; */

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column-reverse;
    height: unset;
    gap: 24px;
  }
`
const MiddleFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  flex: 0.8;
`
const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 0.9;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 24px;
  }
`
