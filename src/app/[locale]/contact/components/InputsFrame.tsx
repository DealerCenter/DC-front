import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import TextInput from '@/common/components/InputElements/TextInput'

type Props = {}

const InputsFrame = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <PairFrame>
        <TextInputSmallBox>
          <TextInput
            type='text'
            placeholder={t('name')}
            name='name'
            value=''
            onChange={() => {}}
            onBlur={() => {}}
            isWidthFill={true}
          />
        </TextInputSmallBox>
        <TextInputSmallBox>
          <TextInput
            type='text'
            placeholder={t('surname')}
            name='surname'
            value=''
            onChange={() => {}}
            onBlur={() => {}}
            isWidthFill={true}
          />
        </TextInputSmallBox>
      </PairFrame>
      <TextInput
        type='text'
        placeholder={t('email')}
        name='email'
        value=''
        onChange={() => {}}
        onBlur={() => {}}
        isWidthFill={true}
      />
      <TextInput
        type='text'
        placeholder={t('mobile number')}
        name='mobile number'
        value=''
        onChange={() => {}}
        onBlur={() => {}}
        isWidthFill={true}
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

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing?.md};
  }
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

const TextInputSmallBox = styled.div`
  width: 270px;

  @media ${({ theme }) => theme.media?.md} {
    width: 195px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: unset;
  }
`
