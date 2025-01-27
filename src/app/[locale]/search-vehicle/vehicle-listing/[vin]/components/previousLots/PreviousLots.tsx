import { useTranslations } from 'next-intl'
import styled from 'styled-components'
import BoxWithHeader from '../common/BoxWithHeader'
import LotItem from './components/LotItem'
import ListHeader from './components/ListHeader'

type Props = {}

const PreviousLots = (props: Props) => {
  const t = useTranslations('')

  return (
    <BoxWithHeader header={t('previous lots')} isWidthFill={true}>
      <Frame>
        <ListHeader />
        <LotsFrame>
          <LotItem
            date='02/06/2023'
            amount='$189,5580 USD'
            auctionState='pending'
          />
          <LotItem
            date='02/06/2023'
            amount='$18,5580 USD'
            auctionState='not sold'
          />
          <LotItem
            date='02/06/2023'
            amount='$18,5580 USD'
            auctionState='not sold'
          />
        </LotsFrame>
      </Frame>
    </BoxWithHeader>
  )
}

export default PreviousLots

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
`

const LotsFrame = styled.div`
  display: flex;
  flex-direction: column;
`
