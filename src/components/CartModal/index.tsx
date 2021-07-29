import { useEffect, useState } from 'react';
import { useOnKeyPressedCartDetailsModalHandler } from '../../hooks/useOnKeyPressedHandlers';
import { api } from '../../services/api';
import { ProductItem } from '../ProductItem';
import styles from './styles.module.scss'

interface Cart {
  item: Product[]
}

export interface Product {
    productId: number;
    name: string;
    salesChannel: string;
    available: boolean;
    bestPriceFormated: string;
    bestPrice: number;
    quantity: number;
    image: string;
}

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CartModal({isOpen, onRequestClose}: ModalProps) {
  const [cart, setCart] = useState<Cart>({item: []})
  useOnKeyPressedCartDetailsModalHandler(onRequestClose)

  useEffect(() => {
    (async() => {
      const response = await api.get<Cart>(`/cart/`)
      const data = response.data
  
      setCart(data)
    })()
  }, []);

  if(!isOpen) {
    return null
  }

  return (   
      <div className={styles.modal}>
        <div className={styles.products}>
           {cart.item.map(product => ( 
             <ProductItem 
             key={product.productId}
             {...product}
             />
          ))}
        </div>
         <p>Total do pedido: {`R$ 20.356,95`}</p>
          
        <button>FINALIZAR COMPRA</button>
      </div>
  )
}


