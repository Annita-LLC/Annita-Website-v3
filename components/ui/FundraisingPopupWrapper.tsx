'use client'

import { useState, useEffect } from 'react'
import FundraisingPopup from './FundraisingPopup'

const FundraisingPopupWrapper = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if popup has been shown in this session (new website load)
    // sessionStorage persists only for the current tab session
    const hasShownInSession = sessionStorage.getItem('annita-fundraising-shown')
    
    if (!hasShownInSession) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('annita-fundraising-shown', 'true')
      }, 1000) // 1 second delay
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return <FundraisingPopup onClose={handleClose} />
}

export default FundraisingPopupWrapper
