import { downloadCalculatorExcel, uploadCalculatorData } from '@/api/apiCalls'
import FileDropZone from '@/common/components/InputElements/FileDropZone'
import AppButton from '@/common/components/appButton/AppButton'
import React, { useState } from 'react'
import styled from 'styled-components'
import Calculator from './components/Calculator'
import DealerLevels from './components/DealerLevels'
import DocCheck from './components/DocCheck'

type Props = {}

const Settings = (props: Props) => {
  return (
    <div>
      <Calculator />
      <DocCheck />
      <DealerLevels />
    </div>
  )
}

export default Settings
