import { Prisma } from '@prisma/client';
import {prisma} from '../../libs/prisma'
import { ProteinsRepository } from "../proteins-repository";


export class PrismaProteinRespository implements ProteinsRepository{
    async findById(id: number){
        const proteins = await prisma.protein.findUnique({
            where: {
                id,
            }
        }) 
        return proteins
    }


    async create(data: Prisma.ProteinCreateInput){
        const protein = await prisma.protein.create({
            data,
        })
        return protein
    }
    async findAll() {
        const proteins = await prisma.protein.findMany()
        return proteins
    }
    
}