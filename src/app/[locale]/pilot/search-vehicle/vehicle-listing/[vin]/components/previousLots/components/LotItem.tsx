import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import theme from '@/app/[locale]/pilot/theme'

import AuctionStateBox from '@/common/components/auctionState/AuctionStateBox'

import iaaIcon from '@/assets/icons/logos/iaaLogo.svg'

type Props = {
  date: string
  amount: string
  auctionState: 'sold' | 'not sold' | 'pending'
}

const LotItem = ({ date, amount, auctionState }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <>
      <Line />
      <Container>
        <LogoBox>
          <Image src={iaaIcon} alt='logo icon' width={isMobile ? 42 : 60} />
        </LogoBox>
        <DateBox>
          <Label>{date}</Label>
        </DateBox>
        <AmountBox>
          <Label>{amount}</Label>
        </AmountBox>
        <StateFrame>
          <StateBoxFrame>
            <AuctionStateBox auctionState={auctionState} shrinkOnSm={true} />
          </StateBoxFrame>
        </StateFrame>
      </Container>
    </>
  )
}

export default LotItem

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing?.sm};
  border-radius: ${({ theme }) => theme.radius?.lg};
  height: 60px;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.main_gray_04};
  }
`

const AmountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 96px;
  }
`

const DateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 75px;
  }
`

const StateFrame = styled.div`
  display: flex;
  align-items: center;
`

const StateBoxFrame = styled.div`
  @media ${({ theme }) => theme.media?.sm} {
    width: 42px;
  }

  width: 130px;
`

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 42px;
  }
`

const Label = styled.label`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight?.normal};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.small_13};
  }
`

const Line = styled.div`
  height: 1px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors?.main_gray_10};

  margin-left: 12px;
  margin-right: 12px;
`
