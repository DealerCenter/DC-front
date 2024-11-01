import { Spin } from 'antd'
import styled from 'styled-components'
import './styles.css'

type Props = {
  size?: 'default' | 'large' | 'small'
  isLoading: boolean
}

const LoadingOverlay = ({ isLoading, size = 'large' }: Props) => {
  if (!isLoading) return null

  return (
    <OverlayWrapper>
      <Spin size={size} />
    </OverlayWrapper>
  )
}

export default LoadingOverlay

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2); // Semi-transparent background
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; // Ensure it's on top
`
