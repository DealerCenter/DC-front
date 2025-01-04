import TextInput from '@/common/components/InputElements/TextInput'
import AppButton from '@/common/components/appButton/AppButton'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { createDealerLevels, getDealerLevels } from '@/api/apiCalls'
import Loader from '@/common/components/loader/Loader'
import { message } from 'antd'

type Props = {}

const DealerLevels = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [levels, setLevels] = useState([
    { level: '', cost: '', id: '' },
    { level: '', cost: '', id: '' },
    { level: '', cost: '', id: '' },
    { level: '', cost: '', id: '' },
    { level: '', cost: '', id: '' },
  ])

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target
    const newLevels = [...levels]
    // @ts-ignore
    newLevels[index][name] = value
    setLevels(newLevels)
  }

  const handleSubmit = () => {
    levels.forEach((level) => {
      if (!level.level || !level.cost) {
        message.error('Please fill all fields')
        return
      }
    })
    createDealerLevels(levels)
  }

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        setIsLoading(true)
        const response = await getDealerLevels()
        setLevels(response)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLevels()
  }, [])

  return (
    <div>
      <MT20 />
      <MT20 />
      <Title>Dealer Levels</Title>

      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          {levels.map((level, index) => (
            <InputsPair key={index}>
              <TextInput
                hasLabel
                name='level'
                placeholder='Enter level name'
                type='text'
                onBlur={() => {}}
                value={level.level}
                onChange={(event) => handleInputChange(index, event)}
              />

              <TextInput
                hasLabel
                name='cost'
                placeholder='Enter cost'
                type='number'
                onBlur={() => {}}
                value={level.cost}
                onChange={(event) => handleInputChange(index, event)}
              />
            </InputsPair>
          ))}

          <SubmitButton>
            <AppButton text='Save' onClick={handleSubmit} type='filled' />
          </SubmitButton>
        </Container>
      )}
    </div>
  )
}

export default DealerLevels

const MT20 = styled.div`
  margin-top: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors?.white};
  padding: 20px;
  border-radius: ${({ theme }) => theme.radius?.lg};
`

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`

const InputsPair = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

const SubmitButton = styled.div`
  /* align-self: flex-end; */
`
