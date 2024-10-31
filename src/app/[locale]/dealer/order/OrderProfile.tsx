import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import { routeName } from '@/common/helpers/constants'

import CarImagesAndDetailsBox from './components/CarImagesAndDetailsBox'
import IdAndDateBox from '../../../../common/components/idAndDateBox/IdAndDateBox'

import AppGoBackButton from '@/common/components/appButton/AppGoBackButton'
import DummyShipping from '@/common/components/ShippingStatusButton/DummyShipping'
import { useMediaQuery } from 'react-responsive'
import theme from '../../theme'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'

type Props = {}

const OrderProfile = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const router = useRouter()

  return (
    <Container>
      <TopFrame>
        <IdAndDateFrame>
          <IdAndDateBox
            auctionId='932874929'
            orderId='2387498739'
            dateOfPurchase='20/04/2025'
          />
        </IdAndDateFrame>
        {!isMobile && (
          <>
            <StateBoxFrame>
              <DummyShipping />
            </StateBoxFrame>
            <BackToOrderButton>
              <AppGoBackButton
                onClick={() => router.push(routeName.dealerOrderHistory)}
                text={t('back to orders')}
              />
            </BackToOrderButton>
          </>
        )}
        <CarImagesAndDetailsBox />
      </TopFrame>
      <BottomFrame>
        <LeftColumn />
        <RightColumn />
      </BottomFrame>
    </Container>
  )
}

export default OrderProfile

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    gap: 8px;
    padding: 0 5%;
    width: 100%;
  }
`

const BackToOrderButton = styled.div`
  margin-bottom: 64px;
`

const StateBoxFrame = styled.div`
  position: absolute;
  top: 110px;
  left: 0;

  z-index: 10;
`

const IdAndDateFrame = styled.div`
  @media ${({ theme }) => theme.media?.sm} {
    position: unset;
    top: unset;
    right: unset;
  }
  position: absolute;
  top: 95px;
  right: 0;

  z-index: 10;
`

const TopFrame = styled.div``

const BottomFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 8px;
  }
`
