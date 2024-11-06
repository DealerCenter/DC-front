import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import { useUserData } from '@/common/store/userDataStore'
import HeaderH4Bold from '../../../../common/components/textComponents/HeaderH4Bold'
import ChangePasswordBox from './components/ChangePasswordBox'
import ContactInformationBox from './components/ContactInformationBox'
import Loader from '@/common/components/loader/Loader'

type Props = {}

const PersonalInformation = (props: Props) => {
  const t = useTranslations('')
  const { userData } = useUserData()

  return (
    <Container>
      <HeaderH4Bold text={t('personal information')} />
      <Frame>
        {userData?.isJuridical ? (
          <>
            <ContactInformationBox type='company' />
            <ContactInformationBox type='representative' />
          </>
        ) : (
          <ContactInformationBox type='individual' />
        )}
        <ChangePasswordBox />
      </Frame>
    </Container>
  )
}

export default PersonalInformation

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 16px;
  gap: 24px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`
