import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import SearchButtonDynamic from './SearchButtonDynamic'
import LoginButton from '../../LoginButton'
import LangChangeButton from './LangChangeButton'

type Props = {}

const MenuButtons = (props: Props) => {
  const [isSearchActive, setIsSearchActive] = useState(false)

  return (
    <Container>
      <SearchButtonDynamic
        isActive={isSearchActive}
        setIsActive={setIsSearchActive}
      />
      {!isSearchActive && (
        <>
          <LoginButton />
          <LangChangeButton left={4} top={64} width={71} />
        </>
      )}
    </Container>
  )
}

export default MenuButtons

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  min-width: 200px;
  margin-left: 16px;
`
