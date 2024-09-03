import TextInput from '@/common/components/inputElements/TextInput'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import theme from '../../theme'

type Props = {}

const InputsFrame = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  return (
    <Container>
      <PairFrame>
        <TextInput
          type='text'
          placeholder={t('name')}
          name='name'
          value=''
          onChange={() => {}}
          onBlur={() => {}}
          width={isMobile ? 163 : isTablet ? 195 : 270}
        />
        <TextInput
          type='text'
          placeholder={t('surname')}
          name='surname'
          value=''
          onChange={() => {}}
          onBlur={() => {}}
          width={isMobile ? 163 : isTablet ? 195 : 270}
        />
      </PairFrame>
      <TextInput
        type='text'
        placeholder={t('email')}
        name='email'
        value=''
        onChange={() => {}}
        onBlur={() => {}}
        width={isMobile ? 350 : isTablet ? 414 : 564}
      />
      <TextInput
        type='text'
        placeholder={t('mobile number')}
        name='mobile number'
        value=''
        onChange={() => {}}
        onBlur={() => {}}
        width={isMobile ? 350 : isTablet ? 414 : 564}
      />
      <StyledTextArea name='message' placeholder={t('message')} />
    </Container>
  )
}

export default InputsFrame

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
  }
`

const PairFrame = styled.div`
  display: flex;
  flex-direction: row;

  gap: ${({ theme }) => theme.spacing?.lg};
`

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  height: 153px;
  outline: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
  border: none;
  border-radius: ${({ theme }) => theme.radius?.lg};

  padding: 10px 10px 10px 16px;

  resize: none;

  width: 564px;

  @media ${({ theme }) => theme.media?.md} {
    width: 414px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: 350px;
  }
`
