import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import leftArrow from '@/assets/icons/arrows/arrowLeftThinBlack.svg'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'

type Props = {}

const OrderProfile = (props: Props) => {
  const t = useTranslations('')
  const router = useRouter()

  return (
    <Container>
      <BackToOrderButton onClick={() => router.push(routeName.orderHistory)}>
        <Image src={leftArrow} alt='left arrow icon' height={20} />
        <GoBackLabel>{t('back to orders')}</GoBackLabel>
      </BackToOrderButton>
    </Container>
  )
}

export default OrderProfile

const Container = styled.div``

const BackToOrderButton = styled.button`
  height: 68px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 40px;

  background-color: unset;
  border: none;
  border-radius: ${({ theme }) => theme.radius?.lg};

  &:hover {
    background-color: ${({ theme }) => theme.colors?.main_gray_04};
  }

  cursor: pointer;
`

const GoBackLabel = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.text_black};
`
