import { useEffect, useState } from "react"

export const useOnKeyPressed = (handleKeyPressed: (event: any) => void) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPressed);
    return () => {
      window.removeEventListener('keydown', handleKeyPressed);
    };
  }, [handleKeyPressed])
}

export const useOnKeyPressedCartDetailsModalHandler = (closeModal: () => void) => {
  const handleKeyEscapePressed = (event) => {
    if(event.key === 'Escape') {
      closeModal()
    }
  }

  useOnKeyPressed(handleKeyEscapePressed)
}