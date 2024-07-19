import React, { useEffect } from 'react'
import Modal from 'react-modal'
import { string } from 'yup'

type Props = {
  isOpen: boolean
  onAfterOpen?: () => void
  onRequestClose: () => void
  style?: {}
  contentLabel?: string
  children: React.ReactNode
}

const AppModal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  style,
  contentLabel,
  children,
}: Props) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'scroll',
      height: '100%',
      border: 'unset',
      backgroundColor: 'transparent',
      ...style,
    },
  }

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset')
  }, [isOpen])
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={contentLabel}
    >
      {children}
    </Modal>
  )
}

export default AppModal
