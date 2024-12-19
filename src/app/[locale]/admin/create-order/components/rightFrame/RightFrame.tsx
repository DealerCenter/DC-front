import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getContainersAdmin } from '@/api/apiCalls'
import AppSelectAntDesign from '@/common/components/appSelect/AppSelectAntDesign'
import Box from '../../../components/common/Box'
// import ShippingStatusBox from '../../../order-history/components/shippingStateBox/ShippingStatusBox'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../hooks/useCreateOrderContext'
import DropdownWithSearch from './DropdownWithSearch'
import ShippingStatusBox from '@/common/components/shippingStateBox/ShippingStatusBox'
import { SHIPPING_STATUS } from '@/common/helpers/constants'

type Props = {}

const RightFrame = ({}: Props) => {
  const { values, setFieldValue } = useCreateOrderContext()
  const t = useTranslations('')
  const [containerOptions, setContainerOptions] = useState<
    {
      label: string
      id: number
    }[]
  >([])

  const handleSetContainerValue = (id: number) => {
    setFieldValue(FIELD_NAMES.CONTAINER_ID, id)
  }

  const fetchContainerData = async () => {
    try {
      const response = await getContainersAdmin()

      setContainerOptions([])

      response?.map((item) =>
        setContainerOptions((prev) => [
          ...prev,
          {
            label: item.name,
            id: item.id,
          },
        ])
      )
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchContainerData()
  }, [])

  return (
    <Container>
      <Box>
        <Header>{t('status')}</Header>
        <Line />
        <ShippingStatusBox
          isEditing={true}
          value={values[FIELD_NAMES.STATUS_AND_DATES]}
          setStatusFieldValue={(value) =>
            setFieldValue(FIELD_NAMES.STATUS_AND_DATES, value)
          }
        />
      </Box>
      <Box>
        <Header>{t('container data')}</Header> <Line />
        <Frame>
          <Frame2>
            <AppSelectAntDesign
              value={values[FIELD_NAMES.CONTAINER_ID]}
              optionsWithId={containerOptions}
              onChangeId={handleSetContainerValue}
              placeholder={t('select')}
              fontSize={13}
            />
          </Frame2>
        </Frame>
      </Box>
      <Box>
        <Header>{t('recipient data')}</Header> <Line />
        <Frame>
          <Frame2>
            <DropdownWithSearch
              searchType='receiver'
              placeholder={t('search')}
              fontSize={13}
            />
          </Frame2>
        </Frame>
      </Box>
      <Box>
        <Header>{t('dealer data')}</Header> <Line />
        <Frame>
          <Frame2>
            <DropdownWithSearch
              searchType='dealer'
              placeholder={t('search')}
              fontSize={13}
            />
          </Frame2>
        </Frame>
      </Box>
    </Container>
  )
}

export default RightFrame

const Container = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  width: unset;

  @media ${({ theme }) => theme.media?.sm} {
    gap: 8px;
    width: 343px;
  }
`

const Line = styled.div`
  height: 1px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`

const Header = styled.h6`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const DataFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`

const Name = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const Value = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
`
const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledLink = styled.a`
  width: 112px;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.link_blue};
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`
const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  white-space: nowrap;
`
