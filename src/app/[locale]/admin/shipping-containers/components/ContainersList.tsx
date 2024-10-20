import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'

import ListItem from './listItem/ListItem'
import LabelsContainer from '@/common/components/labelsContainer/LabelsContainer'
import { CONTAINER_GET_RES } from '@/api/apiTypes'

type Props = {
  containersData: CONTAINER_GET_RES[]
}

const ContainersList = ({ containersData }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <Container>
      {containersData.length !== 0 && (
        <>
          {!isMobile && (
            <LabelsContainer
              labels={[
                // t('brand name'),
                // t('link'),
                // t('departure date'),
                // t('arrival date'),
                // t('num of cars'),
                'name',
                'trackingUrl',
                'createdAt',
                'updatedAt',
                'id',
              ]}
              height={88}
            />
          )}
          {containersData &&
            containersData.map((data, i) => (
              <ListItem
                containerData={data}
                key={`ListItemForContainersList${i}`}
                onClick={() => {}}
              />
            ))}
        </>
      )}
    </Container>
  )
}

export default ContainersList

const Container = styled.div``
