import styled, { css } from 'styled-components'

type Props = {
  text: string
  isActive: boolean
  onClick: () => void
  withBorder?: boolean
  fontSize?: string
  height?: number
}

const ChooseButton = ({
  text,
  isActive,
  onClick,
  withBorder = false,
  fontSize = '13px',
  height,
}: Props) => {
  return (
    <Container
      isActive={isActive}
      onClick={onClick}
      withBorder={withBorder}
      fontSize={fontSize}
      height={height}
    >
      {text}
    </Container>
  )
}

export default ChooseButton

type ButtonProps = {
  isActive: boolean
  withBorder: boolean
  fontSize: string
  height?: number
}

const Container = styled.div<ButtonProps>`
  box-sizing: border-box;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  border-radius: ${({ theme }) => theme.radius?.lg};
  border: none;
  width: 143px;

  ${({ fontSize }) => css`
    font-size: ${fontSize};
  `}

  ${({ withBorder }) =>
    withBorder
      ? css`
          border: 1px solid ${({ theme }) => theme.colors?.main_gray_56};
        `
      : css`
          border: unset;
        `}

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          height: 48px;
        `}
          
  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${({ theme }) => theme.colors?.main_gray_100};
          color: ${({ theme }) => theme.colors?.white};
        `
      : css`
          background-color: ${({ theme }) => theme.colors?.white}
          color: ${({ theme }) => theme.colors?.main_gray_100};

          &:hover {
            background-color: ${({ theme }) => theme.colors?.main_gray_04};
          }
        `}

  cursor: pointer;
`
