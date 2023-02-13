import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/prismaClient';

type todoType = {
    title: string,
    desc: string,
    isImportant: boolean,
}

export default async function createTodo(req: NextApiRequest, res: NextApiResponse){

    try{

        const todo: todoType = JSON.parse(req.body);

        if(req.method === 'POST'){

            if(!todo.title.length){
                return res.status(500).json({ message: 'Title of the todo is empty!' })
            }

            try{

                const data = await prisma.todo.create({
                    data: {
                        title: todo.title,
                        desc: todo.desc,
                        isImportant: todo.isImportant,
                    }
                })

                res.status(200).json(data);

            }catch(err){
                return res.status(500).json(err);
            }

        }

    }catch(err){
        return res.status(500).json(err);
    }

}