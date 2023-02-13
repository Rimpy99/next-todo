
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/prismaClient';

export default async function getTodos(req: NextApiRequest, res: NextApiResponse) {

  if(req.method === 'GET'){
    try{
        const data = await prisma.todo.findMany();
        return res.status(200).json(data);
    }catch(err){
        return res.status(500).json(err)
    }
  }

}
