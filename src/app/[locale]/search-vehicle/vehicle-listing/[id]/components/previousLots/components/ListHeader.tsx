import { useTranslations } from 'next-intl'
import styled from 'styled-components'

type Props = {}

const ListHeader = (props: Props) => {
  const t = useTranslations('')

  return (
    <HeadersFrame>
      <EmptyBox>
        <Label></Label>
      </EmptyBox>
      <DateBox>
        <Label>{t('date')}</Label>
      </DateBox>
      <BidPriceBox>
        <Label>{t('bid price')}</Label>
      </BidPriceBox>
      <StatusBox>
        <Label>{t('status')}</Label>
      </StatusBox>
    </HeadersFrame>
  )
}

export default ListHeader

const HeadersFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const EmptyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 42px;
  }
`
const DateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 72px;
  }
`
const BidPriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 72px;
  }
`

const StatusBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 76px;
  }
`

const Label = styled.label`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.small_13};
  }

  text-align: center;
  cursor: default;
`
