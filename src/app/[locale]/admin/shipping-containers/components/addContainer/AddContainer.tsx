import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import AppButton from '@/common/components/appButton/AppButton'
import FileDropZone from '@/common/components/inputElements/FileDropZone'
import TextInput from '@/common/components/inputElements/TextInput'
import ChooseButton from './components/ChooseButton'

import splitGrayLine from '@/assets/icons/splitGrayLine.svg'
import ChangeStatusBox from './components/ChangeStatusBox'
import BindContainerBox from './components/BindContainerBox'

type Props = { onClose: () => void }

const AddContainer = ({ onClose }: Props) => {
  const t = useTranslations('')
  const [type, setType] = useState<'change status' | 'bind container'>(
    'bind container'
  )

  return (
    <Container>
      <FrameTop>
        <ChooseTypeFrame>
          <ChooseButton
            text={t('change status')}
            isActive={type === 'change status'}
            onClick={() => setType('change status')}
            width={151}
            height={36}
          />
          <Image src={splitGrayLine} alt='line icon' />
          <ChooseButton
            text={t('bind container')}
            isActive={type === 'bind container'}
            onClick={() => setType('bind container')}
            width={151}
            height={36}
          />
        </ChooseTypeFrame>
      </FrameTop>
      {type === 'change status' && <ChangeStatusBox />}
      {type === 'bind container' && <BindContainerBox />}
    </Container>
  )
}

export default AddContainer

const ChooseTypeFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const FrameTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 715px;
  padding: 6px;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 335px;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.main_gray_10};
  background-color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media?.sm} {
    padding: 32px 16px;
  }
`
