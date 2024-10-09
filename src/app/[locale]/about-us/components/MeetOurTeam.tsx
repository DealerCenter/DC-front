import React from 'react'
import PageHeader from '../../landing-page/components/common/PageHeader'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import member1 from '@/assets/images/dummyTeamMembers/member1.png'
import member2 from '@/assets/images/dummyTeamMembers/member2.png'
import member3 from '@/assets/images/dummyTeamMembers/member3.png'
import member4 from '@/assets/images/dummyTeamMembers/member4.png'
import member5 from '@/assets/images/dummyTeamMembers/member5.png'
import TeamMember from './TeamMember'

type Props = {}

const MeetOurTeam = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <PageHeader
        headerText={t('meet our team')}
        text='გაიცანით ჩვენი გუნდი და უკეთ გაიგეთ, რა გვამოძრავებს თუ რაღაც ეგეთი ტექსტი'
      />
      <TeamMembersFrame>
        <TeamMembersRow>
          <TeamMember
            imageSrc={member1.src}
            fullName='სახელი გვარი'
            position='დამაარსებელი'
            bgColor='rgba(199, 185, 218, 1)'
          />
          <TeamMember
            imageSrc={member2.src}
            fullName='სახელი გვარი'
            position='დამაარსებელი'
            bgColor='rgba(170, 156, 117, 1)'
          />
          <TeamMember
            imageSrc={member3.src}
            fullName='სახელი გვარი'
            position='დამაარსებელი'
            bgColor='rgba(190, 168, 135, 1)'
          />
        </TeamMembersRow>
        <TeamMembersRow>
          <TeamMember
            imageSrc={member4.src}
            fullName='სახელი გვარი'
            position='დამაარსებელი'
            bgColor='rgba(209, 186, 169, 1)'
          />
          <TeamMember
            imageSrc={member5.src}
            fullName='სახელი გვარი'
            position='დამაარსებელი'
            bgColor='rgba(209, 223, 195, 1)'
          />
        </TeamMembersRow>
      </TeamMembersFrame>
    </Container>
  )
}

export default MeetOurTeam

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 96px 0;
  gap: 64px;

  @media ${({ theme }) => theme.media?.sm} {
    align-items: center;
  }
`

const TeamMembersFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 32px;
  gap: 48px;

  @media ${({ theme }) => theme.media?.sm} {
    gap: 40px;
  }
`

const TeamMembersRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 64px;

  @media ${({ theme }) => theme.media?.md} {
    gap: unset;
  }

  @media ${({ theme }) => theme.media?.sm} {
    justify-content: unset;
    flex-direction: column;
    gap: 40px;
  }
`
