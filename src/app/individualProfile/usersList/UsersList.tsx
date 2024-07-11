import React from 'react'
import styled from 'styled-components'

type Props = {}

const UsersList = (props: Props) => {
  return (
    <Container>
      <H2Box>
        <StyledH2>მომხმარებლების სია</StyledH2>
      </H2Box>
    </Container>
  )
}

export default UsersList

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  width: 836px;
  height: 569px;
  background-color: white;
  border-radius: 16px;
  margin: 0;
`
const H2Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 372px;
  height: 82px;
`

const StyledH2 = styled.div`
  color: rgba(32, 32, 32, 1);
  font-size: 28px;
  font-weight: 700;
`
