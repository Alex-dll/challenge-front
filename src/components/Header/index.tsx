import styles from './styles.module.scss'

import logo from '../../../public/images/logo.png'
import Image from 'next/image'

interface HeaderProps {
  onOpenCartModal: () => void;
}

export function Header({ onOpenCartModal }: HeaderProps) {
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
          <img
            src="/images/cart.svg" 
            alt="Carrinho" 
            onClick={onOpenCartModal}
          />
         </button>
      </div>

    </div>
  </header>
  )
}