import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const ManageNotifications = (props: Props) => {
  const t = useTranslations('')

  return <Container>{t('manage notifications')}</Container>
}

export default ManageNotifications

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  width: 836px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 16px;
`
