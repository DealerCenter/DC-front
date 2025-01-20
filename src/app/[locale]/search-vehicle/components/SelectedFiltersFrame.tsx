import React from 'react'
import styled from 'styled-components'
import SelectedFilterItem from './SelectedFilterItem'

type Props = {
  activeFilters: Record<string, any> // Accepts key-value pairs
  handleRemoveFromFilters: (key: string) => void // Handles removal by key
}

const SelectedFiltersFrame = ({
  activeFilters,
  handleRemoveFromFilters,
}: Props) => {
  return (
    <Container>
      {Object.entries(activeFilters).map(([key, value], i) => (
        <SelectedFilterItem
          key={i}
          label={`${key}: ${value}`} // Display key-value pairs
          onCancel={() => handleRemoveFromFilters(key)} // Pass key for removal
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
