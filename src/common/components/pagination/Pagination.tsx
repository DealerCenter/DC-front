import React from 'react'
import styled, { css } from 'styled-components'

import arrowLeft from '@/assets/icons/arrows/arrowLeftBlack.svg'
import arrowLeftGray from '@/assets/icons/arrows/arrowLeftGray.svg'
import arrowRight from '@/assets/icons/arrows/arrowRightBlack.svg'
import arrowRightGray from '@/assets/icons/arrows/arrowRightGray.svg'
import Image from 'next/image'

type Props = {
  currentPage: number
  numOfPages: number
  setCurrentPage: (cur: number) => void
  isDisabled?: boolean
}

const Pagination = ({
  currentPage,
  numOfPages,
  setCurrentPage,
  isDisabled,
}: Props) => {
  const handlePageUp = () => {
    if (currentPage < numOfPages) setCurrentPage(currentPage + 1)
  }
  const handlePageDown = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const getVisiblePages = () => {
    let pages: (number | string)[] = []

    // Show the first page always
    pages.push(1)

    // Add "..." before the currentPage range if needed
    if (currentPage > 4) {
      pages.push('...')
    }

    // Show 2 pages before and 2 pages after the currentPage
    for (
      let i = Math.max(2, currentPage - 2);
      i <= Math.min(numOfPages - 1, currentPage + 2);
      i++
    ) {
      pages.push(i)
    }

    // Add "..." after the currentPage range if needed
    if (currentPage < numOfPages - 3) {
      pages.push('...')
    }

    // Show the last page always
    if (numOfPages > 1) {
      pages.push(numOfPages)
    }

    return pages
  }

  const pages = getVisiblePages()

  return (
    <>
      {numOfPages > 1 && (
        <Container>
          <Box
            onClick={isDisabled ? () => {} : handlePageDown}
            isVisible={currentPage > 1}
          >
            <Image
              src={currentPage !== 1 ? arrowLeft : arrowLeftGray}
              alt='arrow left'
            />
          </Box>
          {pages.map((page, index) =>
            typeof page === 'number' ? (
              <Box
                key={`paginationKDG${page}`}
                onClick={isDisabled ? () => {} : () => setCurrentPage(page)}
                isVisible={true}
                done={page === currentPage}
              >
                <Num>{page}</Num>
              </Box>
            ) : (
              <DotsBox key={`dots-${index}`}>
                <Dot />
                <Dot />
                <Dot />
              </DotsBox>
            )
          )}
          <Box
            onClick={isDisabled ? () => {} : handlePageUp}
            isVisible={currentPage < numOfPages}
          >
            <Image
              src={currentPage < numOfPages ? arrowRight : arrowRightGray}
              alt='arrow right'
            />
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

type BoxProps = { done?: boolean; isVisible: boolean }

const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius?.lg};

  ${({ done }) =>
    done
      ? css`
          color: ${({ theme }) => theme.colors?.white};
          background-color: ${({ theme }) => theme.colors?.main_gray_100};
        `
      : css`
          color: ${({ theme }) => theme.colors?.black};
          background-color: ${({ theme }) => theme.colors?.white};
        `}

  ${({ isVisible }) =>
    isVisible
      ? css`
          border: 1px solid ${({ theme }) => theme.colors?.main_gray_56};
        `
      : css`
          border: 1px solid ${({ theme }) => theme.colors?.main_gray_26};
        `}

  cursor: pointer;
`

const Num = styled.label`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`

const DotsBox = styled.div`
  box-sizing: border-box;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 4px;
  padding-bottom: 10px;
`

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors?.main_gray_56};
`
