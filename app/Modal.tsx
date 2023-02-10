import { useEffect } from 'react';

import ModalForm from './ModalForm'

type Props = {
    setIsModalOpen: React.Dispatch<React.SetStateAction<any>>,
}

export default function Modal({setIsModalOpen}: Props){
    useEffect(() => {
        document.addEventListener('keydown', (key) => {
            key.key === 'Escape' && setIsModalOpen(false)
        })
    })

    return(
        <>
            <div 
                className="w-full h-full absolute top-0 left-0 bg-slate-900 opacity-50" 
                onClick={() => setIsModalOpen(false)}
            />
            <div className="w-1/2 h-fit absolute inset-2/4 bg-gray-800 translate-y-[-50%] translate-x-[-50%] rounded-md">
                <ModalForm />
            </div>
        </>
    )
}