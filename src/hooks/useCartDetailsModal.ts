import { useState } from "react";

export const useCartDetailsModal = () => {
  const [isVisibleCartDetailsModal, setIsVisibleCartDetailsModal] = useState(false);

  function handleOpenOrCloseCartDetailsModal () {
    setIsVisibleCartDetailsModal((prevIsVisible) => !prevIsVisible)
  }
  
  function handleCloseCartDetailsModal() {
    setIsVisibleCartDetailsModal(false)
  }

  return { 
    isVisibleCartDetailsModal,
    handleOpenOrCloseCartDetailsModal,
    handleCloseCartDetailsModal,
  }
}
