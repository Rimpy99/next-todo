'use client'

import { useState } from 'react';

import Modal from './Modal';

import { MdAddBox } from 'react-icons/md';



export default function Header(){

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return(
        <>
            <div>
                <MdAddBox 
                    color='#E9AFA3' 
                    size='70' 
                    className='my-5 mx-5 cursor-pointer'
                    onClick={() => setIsModalOpen(true)}
                />
            </div>
            {
                isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/>
            }
        </>
    )
}