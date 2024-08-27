import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import SearchIcon from './SearchIcon'
import LoginButton from './LoginButton'
import LangChangeButton from './LangChangeButton'

type Props = {}

const MenuButtons = (props: Props) => {
  const [isSearchActive, setIsSearchActive] = useState(false)

  return (
    <Container>
      <SearchIcon isActive={isSearchActive} setIsActive={setIsSearchActive} />
      {!isSearchActive && (
        <>
          <LoginButton />
          <LangChangeButton left={2} top={66} width={71} />
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
