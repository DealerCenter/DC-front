import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'

import checkmarkGreen from '@/assets/icons/checkedGreen.svg'

import ArrivalStateBox from '../../../../../common/components/arrivalState/ArrivalStateBox'

type Props = {
  amount: number
  arrivalState: string
  buyerFullName: string
  buyerPhoneNumber: string
  vinCode: string
}

const DetailsBox = ({
  amount,
  arrivalState,
  buyerFullName,
  buyerPhoneNumber,
  vinCode,
}: Props) => {
  return (
    <Container>
      <VinCodeBox>
        <Text>{vinCode}</Text>
      </VinCodeBox>
      <Frame>
        <IconBox>
          <Image src={checkmarkGreen} alt='icon' width={16} height={16} />
        </IconBox>
        <Box>
          <TextBold>{buyerFullName}</TextBold>
          <Text>{buyerPhoneNumber}</Text>
        </Box>
      </Frame>
      <ArrivalStateBox arrivalState={arrivalState} />
      <Money>$ {amount.toString()}</Money>
    </Container>
  )
}

export default DetailsBox

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 660px;
  /* gap: 42px; */
`

const Money = styled.p`
  margin: 0;
  font-size: 23px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.text_black};
`

const Frame = styled.div`
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
const TextBold = styled.div`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.text_black};
`

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.text_black};
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`

const VinCodeBox = styled.div`
  padding: 10px 0px;
`
