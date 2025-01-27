import React from 'react'
import styled from 'styled-components'

import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Section4 from './components/section4/Section4'
import Footer from '@/common/components/footer/Footer'
import Section5 from './components/section5/Section5'
import { useMediaQuery } from 'react-responsive'
import theme from '../theme'

type Props = {}

const LandingPage = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <Container>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {!isMobile && <Section5 />}
      <Footer />
    </Container>
  )
}

export default LandingPage

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`
