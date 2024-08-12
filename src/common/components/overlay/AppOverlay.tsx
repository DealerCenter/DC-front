import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type Props = { children: React.ReactNode }

const AppOverlay = ({ children }: Props) => {
  return <BackgroundOverlay>{children}</BackgroundOverlay>
}

export default AppOverlay

const BackgroundOverlay = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors?.black};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;

  padding: 64px 128px;

  display: flex;
  justify-content: center;
  align-items: center;
`
