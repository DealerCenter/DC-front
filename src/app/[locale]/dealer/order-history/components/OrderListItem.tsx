import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import CarDetailsBox from './CarDetailsBox'
import DebtBox from './DebtBox'

type Props = { imageLink: string; isArrived: boolean }

const OrderListItem = ({ imageLink, isArrived }: Props) => {
  return (
    <Container>
      <CarDetailsBox imageLink={imageLink} />
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
`
