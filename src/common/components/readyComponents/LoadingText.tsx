import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const LoadingText = (props: Props) => {
  const t = useTranslations('')

  return (
    <Loading>
      {t('loading')}
      {'...'}
    </Loading>
  )
}

export default LoadingText

const Loading = styled.div`
  margin: 10px;

  color: ${({ theme }) => theme.colors?.main_gray_56};

  @media ${({ theme }) => theme.media?.sm} {
    margin: 30px;
  }
`
