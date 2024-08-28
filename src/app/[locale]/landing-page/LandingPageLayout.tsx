import Header from '@/common/components/header/Header'
import React from 'react'
import styled from 'styled-components'

type Props = { children: React.JSX.Element }

const LandingPageLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  )
}

export default LandingPageLayout

const ChildrenContainer = styled.div`
  display: flex;
  justify-content: center;
`
