import { routeName } from '@/common/helpers/constants'
import { useRouter } from '@/navigation'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const Logo = (props: Props) => {
  const router = useRouter()

  return (
    <StyledLogo onClick={() => router.push(routeName.landingPage)}>
      DC
    </StyledLogo>
  )
}

export default Logo

const StyledLogo = styled.label`
  color: ${({ theme }) => theme.colors?.white};
  font-size: 40px;
  font-weight: bold;
  padding: 12px 16px 12px 16px;
  color: ${({ theme }) => theme.colors?.white};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 23px;
    font-weight: ${({ theme }) => theme.fontWeight?.bold};
    padding: 12px 8px 12px 8px;
    cursor: default;
  }

  user-select: none;
  cursor: pointer;
`
