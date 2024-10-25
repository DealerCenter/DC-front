import React from 'react'
import LabelsContainer from '@/common/components/labelsContainer/LabelsContainer'
import { useTranslations } from 'next-intl'

import styled from 'styled-components'
import ListItem from './listItem/ListItem'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'
import { DEALERS_DATA } from '@/api/apiTypes'

type Props = {
  dealersData: DEALERS_DATA[]
  onDeleteDealer: (dealerId: number) => void
}

const DealersList = ({ dealersData, onDeleteDealer }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const router = useRouter()

  return (
    <Container>
      {dealersData.length !== 0 && (
        <>
          {!isMobile && (
            <LabelsContainer
              labels={[
                t('full name'),
                t('mobile'),
                t('date of joining'),
                t('debt'),
                t('num of cars'),
              ]}
              paddingRight={24}
            />
          )}
          {dealersData.map((data) => (
            <ListItem
              userData={data}
              key={`ListItem${data.id}`}
              onClick={() =>
                router.push(`${routeName.adminDealerProfile}/${data.id}`)
              }
              onDeleteDealer={onDeleteDealer}
            />
          ))}
        </>
      )}
    </Container>
  )
}

export default DealersList

const Container = styled.div``
