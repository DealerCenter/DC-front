import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import checkmarkGreen from '@/assets/icons/checkedGreen.svg'

type Props = { header: string; fullName: string; mobileNumber: string }

const PersonFrameMobile = ({ header, fullName, mobileNumber }: Props) => {
  return (
    <Container>
      <IconBox>
        <Image src={checkmarkGreen} alt='icon' width={16} height={16} />
      </IconBox>
      <DetailsFrame>
        <Text>{header}</Text>
        <DetailsBox>
          <TextGray>{fullName}</TextGray>
          <TextGray>{mobileNumber}</TextGray>
        </DetailsBox>
      </DetailsFrame>
    </Container>
  )
}

export default PersonFrameMobile

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const DetailsFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const TextGray = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_68};
`
