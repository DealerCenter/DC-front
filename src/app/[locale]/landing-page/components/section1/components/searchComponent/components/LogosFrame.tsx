import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import iaaLogo from '@/assets/icons/logos/iaaLogo.svg'
import copartLogo from '@/assets/icons/logos/copartLogo.svg'
import ContainersImage from '../../ContainersImage'

type Props = {}

const LogosFrame = (props: Props) => {
  const t = useTranslations('')

  return (
    <BottomFrame>
      <Image src={iaaLogo} alt='iaa logo' />
      <LogosText>
        {t("browse cars at America's two largest auctions")}
      </LogosText>
      <Image src={copartLogo} alt='copart logo' />
      <ContainersImage />
    </BottomFrame>
  )
}

export default LogosFrame

const BottomFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
  padding: 42px 0px 8px 0px;
`

const LogosText = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_68};
`
