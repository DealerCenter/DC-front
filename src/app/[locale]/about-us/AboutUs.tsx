import React from 'react'
import styled from 'styled-components'
import WhatCostumersAreSaying from '../landing-page/components/section4/components/WhatCostumersAreSaying'
import ContactForm from '../contact/components/ContactForm'
import { useTranslations } from 'next-intl'

type Props = {}

const AboutUs = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <WhatCostumersAreSaying onSeeAllClick={() => {}} />
      <ContactForm
        headerText={t('write us')}
        text={t('fill out the form and tell us what you would like to improve')}
      />
    </Container>
  )
}

export default AboutUs

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors?.white};
  width: 100%;
`
