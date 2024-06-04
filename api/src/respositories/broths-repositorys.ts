import {Broth, Prisma } from '@prisma/client'

export interface BrothsRepository {
    create(data: Prisma.BrothCreateInput): Promise<Broth>
    findAll():Promise<Broth[]>
    findById(id: number):Promise<Broth | null>
}