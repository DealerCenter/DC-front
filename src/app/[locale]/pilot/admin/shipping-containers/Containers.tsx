import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { fetchMeAdmin, getContainersAdmin } from '@/api/apiCalls'
import { CONTAINER_GET_RES } from '@/api/apiTypes'

import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import AppModal from '@/common/components/modal/AppModal'
import SearchButton from '@/common/components/searchButton/SearchButton'
import HeaderH4Bold from '../../../../../common/components/textComponents/HeaderH4Bold'
import AddContainer from './components/addContainer/AddContainer'
import ContainersList from './components/ContainersList'

import plusIcon from '@/assets/icons/plus.svg'
import Loader from '@/common/components/loader/Loader'

type Props = {}

const Containers = (props: Props) => {
  const t = useTranslations('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [uploadedSuccessfully, setUploadedSuccessfully] = useState(false)
  const [containersData, setContainersData] = useState<CONTAINER_GET_RES[]>()

  const fetchContainerData = async () => {
    const response = await getContainersAdmin()
    response && setContainersData(response)
    setIsPageLoaded(true)
  }

  useEffect(() => {
    if (uploadedSuccessfully) {
      setIsModalOpen(false)
      setUploadedSuccessfully(false)
    }
  }, [uploadedSuccessfully])

  useEffect(() => {
    fetchContainerData()
  }, [uploadedSuccessfully])

  if (!isPageLoaded) {
    return (
      <Container>
        <HeaderH4Bold text={t('containers')} />
        <Loader height={300} />
      </Container>
    )
  }

  return (
    <Container>
      <Frame>
        <HeaderH4Bold text={t('containers')} />
        <ButtonFrame>
          <SearchButton
            isActive={isSearchActive}
            setIsActive={setIsSearchActive}
            text={t('search')}
            placeholder={t('search for container')}
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
      {containersData && <ContainersList containersData={containersData} />}
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
