import Modal from 'react-modal';

import styles from './styles.module.scss'

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CartModal({isOpen, onRequestClose}: ModalProps) {

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content react-modal-close react-modal-overlay" 
    >
      <div className={styles.container}>
        <main >
          <aside>
            <img src="/products/note01-samsung-160-160.jpg" alt="Notebook Samsung" />
          </aside>
          <div>
            <p>Modelo do equipamento teste teste teste teste</p>
            <span>Qts.: 1</span>
            <span className={styles.money}>R$ 7999,00</span>
          </div>
        </main>
      </div>
      <div className={styles.container}>
        <main >
          <aside>
            <img src="/products/note01-samsung-160-160.jpg" alt="Notebook Samsung" />
          </aside>
          <div>
            <p>Modelo do equipamento teste teste teste teste</p>
            <span>Qts.: 1</span>
            <span className={styles.money}>R$ 7999,00</span>
          </div>
        </main>
      </div>
      <div className={styles.container}>
        <main >
          <aside>
            <img src="/products/note01-samsung-160-160.jpg" alt="Notebook Samsung" />
          </aside>
          <div>
            <p>Modelo do equipamento teste teste teste teste</p>
            <span>Qts.: 1</span>
            <span className={styles.money}>R$ 7999,00</span>
          </div>
        </main>
      </div>
      <div className={styles.container}>
        <main >
          <aside>
            <img src="/products/note01-samsung-160-160.jpg" alt="Notebook Samsung" />
          </aside>
          <div>
            <p>Modelo do equipamento teste teste teste teste</p>
            <span>Qts.: 1</span>
            <span className={styles.money}>R$ 7999,00</span>
          </div>
        </main>
      </div>
    </Modal>
  )
}


