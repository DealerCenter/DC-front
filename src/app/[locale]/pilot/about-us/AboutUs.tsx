import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import { routeName } from '@/common/helpers/constants'

import ContactForm from '../contact/components/ContactForm'
import SuccessStory from '../landing-page/components/section4/components/SuccessStory'
import WhatCostumersAreSaying from '../landing-page/components/section4/components/WhatCostumersAreSaying'
import PageHeader from './components/PageHeader'
import EarthMapAndInfo from './components/EarthMapAndInfo'
import MeetOurTeam from './components/MeetOurTeam'

type Props = {}

const AboutUs = (props: Props) => {
  const t = useTranslations('')

  const router = useRouter()

  return (
    <Container>
      <PageHeader />
      <EarthMapAndInfo />
      <SuccessStory />
      <MeetOurTeam />
      <WhatCostumersAreSaying onSeeAllClick={() => {}} />
      <ContactFormFrame>
        <BlueText onClick={() => router.push(routeName.contact)}>
          {t('contact us')}
        </BlueText>
        <ContactForm
          headerText={t('write us')}
          text={t(
            'fill out the form and tell us what you would like to improve'
          )}
          isHeaderCentered={true}
        />
      </ContactFormFrame>
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

const ContactFormFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 96px 0;

  @media ${({ theme }) => theme.media?.sm} {
    padding: 64px 0;
  }
`

const BlueText = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.link_blue};

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors?.link_blue};
    text-decoration-thickness: 2px;
  }

  cursor: default;
`
