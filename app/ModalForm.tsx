'use client'

import { useState } from 'react';
import { BsExclamationDiamondFill } from 'react-icons/bs';

export default function ModalForm(){
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [isImportant, setIsImportant] = useState<boolean>(false);

    return(
        <form className='flex flex-col justify-center items-center py-10 px-10'>
            <div className='flex w-[480px] h-fit items-center justify-between mb-[30px]'>
                <BsExclamationDiamondFill 
                    onClick={() => setIsImportant(currentState => currentState = !currentState)} 
                    color={isImportant ? 'orange' : 'white'} 
                    size='40' 
                    className='cursor-pointer'
                />
                <input placeholder='title' onChange={(e) => setTitle(e.target.value)} type="text" id='titleInput' className='py-3 px-3 w-96 rounded-md'/>
            </div>
            <textarea placeholder='description' onChange={(e) => setDesc(e.target.value)} id='desc' className='resize-none w-[480px] h-[300px] py-3 px-3 rounded-md'/>
            <button type='submit' className='py-3 px-7 bg-cyan-400 font-bold rounded-md mt-[20px]'>ADD</button>
        </form>
    )
}