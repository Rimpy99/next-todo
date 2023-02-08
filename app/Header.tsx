'use client'

import { MdAddBox } from 'react-icons/md';

type Props = {
    setIsModalOpen: React.Dispatch<React.SetStateAction<any>>,
}

export default function Header({setIsModalOpen}: Props){

    return(
        <>
            <MdAddBox 
                color='#E9AFA3' 
                size='70' 
                className='my-5 mx-5 cursor-pointer'
                onClick={() => setIsModalOpen(true)}
            />
        </>
    )
}