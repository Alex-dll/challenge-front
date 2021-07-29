import { useState } from 'react';

import Head from 'next/head'
import { Header } from '../components/Header'
import Modal from "react-modal";
import { CartModal } from '../components/CartModal';

Modal.setAppElement('body');

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenCartModal () {
    setModalIsOpen(true)
  }

  function handleCloseCartModal() {
    setModalIsOpen(false)
  }

  return (
  <>
  <Head>
     <title>Home | Agência e Plus</title>
  </Head>

  <Header onOpenCartModal={handleOpenCartModal}/>

  <CartModal 
    isOpen={modalIsOpen}
    onRequestClose={handleCloseCartModal}
  />

  </>
  )
}
