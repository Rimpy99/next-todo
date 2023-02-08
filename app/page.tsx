'use client'

import { useState } from 'react';
import styles from './page.module.css';

import Header from './Header';
import Modal from './Modal';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen}/>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/>}
    </>
  )
}
