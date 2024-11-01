import { Spin } from 'antd'
import styled from 'styled-components'
import './styles.css'

type Props = {
  size?: 'default' | 'large' | 'small'
  isLoading?: boolean
  height?: number
}

const Loader = ({
  size = 'default',
  isLoading = true,
  height = 100,
}: Props) => {
  if (!isLoading) return null

  return (
    <LoaderFrame height={height}>
      <Spin size={size} />
    </LoaderFrame>
  )
}

export default Loader

type LoaderFrameProps = { height: number }

const LoaderFrame = styled.div<LoaderFrameProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => `${height}px`};
`
