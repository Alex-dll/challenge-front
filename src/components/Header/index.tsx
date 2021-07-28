import styles from './styles.module.scss'

import logo from '../../../public/images/logo.png'
import Image from 'next/image'

export function Header() {
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
        <img src="/images/search.svg" alt="Buscar" />
        <img src="/images/person.svg" alt="Contacto" />
        <img src="/images/cart.svg" alt="Carrinho" />
      </div>

    </div>
  </header>
  )
}