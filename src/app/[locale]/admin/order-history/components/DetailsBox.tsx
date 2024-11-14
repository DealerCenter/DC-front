import Image from 'next/image'
import styled from 'styled-components'

import checkmarkGreen from '@/assets/icons/checkedGreen.svg'
import ShippingStatusButton from '@/common/components/ShippingStatusButton/ShippingStatusButton'
import { ShippingStatusAndDates } from '@/common/helpers/constants'

type Props = {
  amount: number
  buyerFullName: string
  buyerPhoneNumber: string
  vinCode: string
  statusAndDates: ShippingStatusAndDates[]
}

const DetailsBox = ({
  amount,
  buyerFullName,
  buyerPhoneNumber,
  statusAndDates,
}: Props) => {
  return (
    <Container>
      <Frame>
        <IconBox>
          <Image src={checkmarkGreen} alt='icon' width={16} height={16} />
        </IconBox>
        <Box>
          <TextBold>{buyerFullName}</TextBold>
          <Text>{buyerPhoneNumber}</Text>
        </Box>
      </Frame>
      <Frame>
        <IconBox>
          <Image src={checkmarkGreen} alt='icon' width={16} height={16} />
        </IconBox>
        <Box>
          <TextBold>{buyerFullName}</TextBold>
          <Text>{buyerPhoneNumber}</Text>
        </Box>
      </Frame>
      <ShippingStatusButtonFrame>
        <ShippingStatusButton statusAndDates={statusAndDates} />
      </ShippingStatusButtonFrame>
      <Money>{`$ ${amount.toString()}`}</Money>
    </Container>
  )
}

export default DetailsBox

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

const ShippingStatusButtonFrame = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
`

const Money = styled.label`
  width: 120px;
  display: flex;
  justify-content: center;
  margin: 0;
  font-size: 23px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`

const Frame = styled.div`
  width: 140px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`
const TextBold = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`

const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.black};
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`
