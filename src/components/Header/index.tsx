import styles from './styles.module.scss'

import logo from '../../../public/images/logo.png'
import Image from 'next/image'
import { CartModal } from '../CartModal'
import { useCartDetailsModal } from '../../hooks/useCartDetailsModal'


export function Header() {
  const { isVisibleCartDetailsModal, handleCloseCartDetailsModal, handleOpenOrCloseCartDetailsModal } = useCartDetailsModal()

  return (
    <header className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <Image 
        src={logo} 
        alt="Agencia E Plus" 
      />
      <nav>
          <a>Lorem Ipsom</a>
          <a>Lorem Ipsom</a>
          <a>Lorem Ipsom</a>
          <a>Lorem Ipsom</a>
      </nav>


      <div className={styles.iconsContainer}>
        <button type='button'>
          <img src="/images/search.svg" alt="Buscar" />
        </button>
        <button type='button'>
          <img src="/images/person.svg" alt="Contacto" />
        </button>
        
        <button type='button'>
              
          <div className={styles.containerCart}>
            <CartModal 
          isOpen={isVisibleCartDetailsModal}
          onRequestClose={handleCloseCartDetailsModal}
        />
        <img
            src="/images/cart.svg" 
            alt="Carrinho" 
            onClick={handleOpenOrCloseCartDetailsModal}
          />
          </div>
         </button>
      </div>

    </div>
  </header>
  )
}