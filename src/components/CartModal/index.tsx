import { useState } from 'react';
import Modal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CartModal({isOpen, onRequestClose}: ModalProps) {

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    // overlayClassName="react-modal-overlay"
    // className="react-modal-content"
    >
      <main>
        <aside>
          <img src="/products/note01-samsung-160-160.jpg" alt="Notebook Samsung" />
        </aside>
        <div>
          <p>Modelo do equipamento teste teste teste teste</p>
          <span>Qts.: 1</span>
          <span>R$ 7999,00</span>
        </div>
      </main>
    </Modal>
  )
}


