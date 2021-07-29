import React from 'react'
import { FC } from 'react'
import { Product } from '../CartModal'
import styles from './styles.module.scss'


export const ProductItem:FC<Product> = ({productId, image, name, quantity, bestPriceFormated}) => {
  return (
    <>
    <div key={productId} className={styles.container}>
    <main >
      <aside>
        <img src={image} alt={name} />
      </aside>
      <div>
        <p>{name}</p>
        <span>Qts.: {quantity}</span>
        <span className={styles.money}>{bestPriceFormated}</span>
      </div>
    </main>
  </div>
    </>
  )
}