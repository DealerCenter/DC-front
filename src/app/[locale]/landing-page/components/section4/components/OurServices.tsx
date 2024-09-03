import React from 'react'
import styled from 'styled-components'
import PageHeader from '../../common/PageHeader'

type Props = {}

const OurServices = (props: Props) => {
  return (
    <Container>
      <HeaderBox>
        <PageHeader
          headerText='dkjsflj'
          text='sldkfjl'
          headerColor='white'
          textColor='white'
        />
      </HeaderBox>
    </Container>
  )
}

export default OurServices

const Container = styled.div`
  display: flex;
`

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  background-color: ${({ theme }) => theme.colors?.footer_black};
`
