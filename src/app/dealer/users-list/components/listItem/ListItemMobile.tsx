import React from 'react'
import styled from 'styled-components'

type Props = {
  fullName: string
  id: string
  mobile: string
  dateOfAddition: string
  isVerified: boolean
}

const ListItemMobile = ({
  fullName,
  id,
  mobile,
  dateOfAddition,
  isVerified,
}: Props) => {
  return <Container>ListItemMobile</Container>
}

export default ListItemMobile

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 72px;
  gap: 32px;
  padding: 0 16px 0 32px;

  border: 1px solid rgba(32, 32, 32, 0.04);
`
