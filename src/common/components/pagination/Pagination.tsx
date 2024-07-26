import React from 'react'
import styled, { css } from 'styled-components'

import arrowLeft from '@/assets/icons/arrows/arrowLeftBlack.svg'
import arrowRight from '@/assets/icons/arrows/arrowRightBlack.svg'
import Image from 'next/image'
import { boolean } from 'yup'

type Props = {
  currentPage: number
  numOfPages: number
  setCurrentPage: (cur: number) => void
}

const Pagination = ({ currentPage, numOfPages, setCurrentPage }: Props) => {
  const pages = Array.from({ length: numOfPages }, (_, i) => i + 1)

  const handlePageUp = () => {
    if (currentPage < numOfPages) setCurrentPage(currentPage + 1)
  }
  const handlePageDown = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <>
      {numOfPages > 1 && (
        <Container>
          <Box onClick={handlePageDown}>
            <Image src={arrowLeft} alt='arrow left' />
          </Box>
          {pages.map((page) =>
            page === currentPage ? (
              <Box done={true} key={`paginationKDJ${page}`}>
                <Num>{page}</Num>
              </Box>
            ) : (
              <Box
                key={`paginationKDG${page}`}
                onClick={() => setCurrentPage(page)}
              >
                <Num>{page}</Num>
              </Box>
            )
          )}
          <Box onClick={handlePageUp}>
            <Image src={arrowRight} alt='arrow right' />
          </Box>
        </Container>
      )}
    </>
  )
}

export default Pagination

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

type BoxProps = { done?: boolean }

const Box = styled.div<BoxProps>`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors?.main_gray_56};
  border-radius: ${({ theme }) => theme.radius?.lg};

  ${({ done }) =>
    done
      ? css`
          color: ${({ theme }) => theme.colors?.white};
          background-color: ${({ theme }) => theme.colors?.main_gray_100};

          &:hover {
            background-color: ${({ theme }) => theme.colors?.main_gray_90};
          }
        `
      : css`
          color: ${({ theme }) => theme.colors?.text_black};
          background-color: ${({ theme }) => theme.colors?.white};

          &:hover {
            background-color: ${({ theme }) => theme.colors?.main_gray_04};
          }
        `}

  cursor: pointer;
`

const Num = styled.label`
  font-size: 20px;
  font-weight: 500;
`
