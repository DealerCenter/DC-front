import Header from '@/common/components/header/Header'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

type Props = { children: React.JSX.Element }

const LandingPageLayout = ({ children }: Props) => {
  return (
    <div style={{ backgroundColor: theme.colors?.main_gray_04 }}>
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
    </div>
  )
}

export default LandingPageLayout

const ChildrenContainer = styled.div`
  display: flex;
  justify-content: center;
`
