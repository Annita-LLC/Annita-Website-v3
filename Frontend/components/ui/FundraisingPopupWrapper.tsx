'use client'

import { useState } from 'react'
import FundraisingPopup from './FundraisingPopup'

const FundraisingPopupWrapper = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return <FundraisingPopup onClose={handleClose} />
}

export default FundraisingPopupWrapper
