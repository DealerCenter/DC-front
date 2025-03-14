import { downloadDocumentsData, uploadDocumentsData } from '@/api/apiCalls'
import FileDropZone from '@/common/components/InputElements/FileDropZone'
import AppButton from '@/common/components/appButton/AppButton'
import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {}

const DocCheck = (props: Props) => {
  const [file, setFile] = useState(null)

  const handleUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      uploadDocumentsData(formData)
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  const handleDownload = async () => {
    try {
      await downloadDocumentsData()
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  }

  const fileType = {
    'application/vnd.ms-excel': ['.xls'],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
      '.xlsx',
    ],
  }

  return (
    <div>
      <MT20 />
      <Title>Documents Check</Title>
      <Container>
        <div>
          <FileDropZone
            text='Upload Excel file'
            dropText='Drop file here'
            uploadedText='File dropped'
            onDropAdditional={setFile}
            fileType={fileType}
            shouldShowName
          />
          <MT20 />
          <AppButton text='Upload' onClick={handleUpload} type='filled' />
        </div>

        <SubmitButton>
          <AppButton
            text='Download current file'
            onClick={handleDownload}
            type='outlined'
          />
        </SubmitButton>
      </Container>
    </div>
  )
}

export default DocCheck

const MT20 = styled.div`
  margin-top: 20px;
`

const Container = styled.div`
  display: flex;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors?.white};
  padding: 20px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`

const SubmitButton = styled.div`
  justify-self: flex-end;
`
