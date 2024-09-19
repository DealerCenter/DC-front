import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import ContainersList from './components/ContainersList'
import HeaderH4Bold from '../../../../common/components/textComponents/HeaderH4Bold'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'

import plusIcon from '@/assets/icons/plus.svg'
import { containers } from '@/assets/DummyData'
import AddContainer from './components/addContainer/AddContainer'
import AppModal from '@/common/components/modal/AppModal'
import SearchButton from '@/common/components/searchButton/SearchButton'

type Props = {}

const Containers = (props: Props) => {
  const t = useTranslations('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [uploadedSuccessfully, setUploadedSuccessfully] = useState(false)

  useEffect(() => {
    if (uploadedSuccessfully) {
      setIsModalOpen(false)
      setUploadedSuccessfully(false)
    }
  }, [uploadedSuccessfully])

  return (
    <Container>
      <Frame>
        <HeaderH4Bold text={t('containers')} />
        <ButtonFrame>
          <SearchButton
            isActive={isSearchActive}
            setIsActive={setIsSearchActive}
            text={t('search')}
            placeholder={t('search for recipient')}
            onSubmit={() => {}}
            onCloseSearch={() => {}}
          />
          <SecondaryButton
            text={t('add container')}
            onClick={() => {
              setIsModalOpen(true)
            }}
            icon={plusIcon}
          />
        </ButtonFrame>
      </Frame>
      <ContainersList containersData={containers} />
      <AppModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <AddContainer
          onClose={() => setIsModalOpen(false)}
          setUploadedSuccessfully={setUploadedSuccessfully}
        />
      </AppModal>
    </Container>
  )
}

export default Containers

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 16px;
  gap: 16px;

  @media ${({ theme }) => theme.media?.sm} {
    padding: 0px;
  }
  padding: 24px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.media?.sm} {
    align-items: flex-start;
    gap: unset;
    margin-top: 32px;
    min-width: 270px;
    padding: 0 8%;
  }
  align-items: unset;
  gap: 16px;
  width: unset;
  margin-top: unset;
  min-width: unset;
  padding: unset;
`

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 10px;
  padding: 8px 0 24px 0;
`
