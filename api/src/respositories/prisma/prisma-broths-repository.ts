import { prisma } from "../../libs/prisma";
import { Prisma } from "@prisma/client";
import { BrothsRepository } from "../broths-repositorys";



export class PrismaBrothsRepository implements BrothsRepository {
    async findById(id: number){
        const broth = await prisma.broth.findUnique({
            where: {
                id,
            }
        }) 
        return broth
    }

    async create(data: Prisma.BrothCreateInput){
        const broth = await prisma.broth.create({
            data,
        })
        return broth
    }
    async findAll() {
        const broths = await prisma.broth.findMany()
        return broths
    }

}