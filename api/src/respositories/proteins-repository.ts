import { Prisma, Protein } from '@prisma/client'

export interface ProteinsRepository {
    create(data: Prisma.ProteinCreateInput): Promise<Protein>
    findAll():Promise<Protein[]>
    findById(id: number):Promise<Protein | null>

}