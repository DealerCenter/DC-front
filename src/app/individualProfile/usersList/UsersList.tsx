import LabelsContainer from '@/common/components/labelsContainer/LabelsContainer'
import { useTranslations } from 'next-intl'
import React, { useTransition } from 'react'
import styled from 'styled-components'

type Props = {}

const UserList = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <LabelsContainer
        labels={[
          t('recipient'),
          t('mobile'),
          t('the date of addition'),
          t('verification'),
        ]}
      />
    </Container>
  )
}

export default UserList

const Container = styled.div`
  width: 788px;
  /* heigh is temporary */
  height: 363px;
  background-color: aliceblue;
`
