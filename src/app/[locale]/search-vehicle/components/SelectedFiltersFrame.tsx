import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SelectedFilterItem from './SelectedFilterItem'

type Props = {
  itemsList: string[]
  handleRemoveFromList: (arg: string) => void
}

const SelectedFiltersFrame = ({ itemsList, handleRemoveFromList }: Props) => {
  return (
    <Container>
      {itemsList.map((item, i) => (
        <SelectedFilterItem
          key={i}
          label={item}
          onCancel={handleRemoveFromList}
        />
      ))}
    </Container>
  )
}

export default SelectedFiltersFrame

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const Item = styled.div``
