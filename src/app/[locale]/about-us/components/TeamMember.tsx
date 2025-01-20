import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  imageSrc: string
  fullName: string
  position: string
  bgColor: string
}

const TeamMember = ({ imageSrc, fullName, position, bgColor }: Props) => {
  return (
    <Container>
      <ImagesBox bgColor={bgColor}>
        <Image src={imageSrc} alt='member photo' width={100} height={100} />
      </ImagesBox>
      <Frame>
        <FullName>{fullName}</FullName>
        <Position>{position}</Position>
      </Frame>
    </Container>
  )
}

export default TeamMember

type ImageBoxProps = { bgColor: string }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  width: 300px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const ImagesBox = styled.div<ImageBoxProps>`
  line-height: 0;
  height: 100px;
  width: 100px;
  border-radius: 100px;

  overflow: hidden;

  ${({ bgColor }) => css`
    background-color: ${bgColor};
  `}
`

const FullName = styled.label`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
  cursor: default;
`

const Position = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_42};
  cursor: default;
`
