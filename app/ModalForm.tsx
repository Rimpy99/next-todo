'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { BsExclamationDiamondFill } from 'react-icons/bs';

export default function ModalForm(){
    const router = useRouter();

    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [isImportant, setIsImportant] = useState<boolean>(false);

    async function addTodo(e: React.FormEvent){
        e.preventDefault();

        if(title.length != 0){
            const data = await fetch('/api/createTodo', {
                method: 'POST',
                body: JSON.stringify({ title, desc, isImportant }),
            });
    
            const res = await data.json();
            
            router.refresh();

            if(!res.ok) console.log(res);
        }
        
    }

    return(
        <form 
            onSubmit={addTodo}
            className='flex flex-col justify-center items-center py-10 px-10'
        >
            <div className='flex w-[480px] h-fit items-center justify-between mb-[30px]'>
                <BsExclamationDiamondFill 
                    onClick={() => setIsImportant(currentState => currentState = !currentState)} 
                    color={isImportant ? 'orange' : 'white'} 
                    size='40' 
                    className='cursor-pointer'
                />
                <input 
                    placeholder='title' 
                    onChange={(e) => setTitle(e.target.value)} 
                    type="text" 
                    id='titleInput' 
                    className='py-3 px-3 w-96 rounded-md'
                />
            </div>
            <textarea 
                placeholder='description' 
                onChange={(e) => setDesc(e.target.value)} 
                id='desc' 
                className='resize-none w-[480px] h-[300px] py-3 px-3 rounded-md'
            />
            <button type='submit' className='py-3 px-7 bg-cyan-400 font-bold rounded-md mt-[20px]'>ADD</button>
        </form>
    )
}