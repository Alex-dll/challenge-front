import { useState } from 'react';

import Head from 'next/head'
import { Header } from '../components/Header'
import Modal from "react-modal";
import { CartModal } from '../components/CartModal';

Modal.setAppElement('body');

export default function Home() {
  return (
  <>
    <Head>
      <title>Home | Agência e Plus</title>
    </Head>

    <Header/>
  </>
  )
}
