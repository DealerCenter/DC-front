import React, { useEffect } from 'react'
import Modal from 'react-modal'

type Props = {
  isOpen: boolean
  onAfterOpen?: () => void
  onRequestClose: () => void
  contentLabel?: string
  children: React.ReactNode
}

const AppModalFullScreen = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  contentLabel,
  children,
}: Props) => {
  const customStyles = {
    content: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      padding: '0',
      margin: '0',
      border: 'none',
      borderRadius: '0',
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      // @ts-ignore
      style={customStyles}
      contentLabel={contentLabel}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  )
}

export default AppModalFullScreen
