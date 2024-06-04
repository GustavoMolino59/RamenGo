import { PrismaProteinRespository } from "@/respositories/prisma/prisma-protein-repository";
import { CreateProteinUseCase } from "../create-proteins";




export function makeCreateProteinUseCase(){
    const proteinRepository = new PrismaProteinRespository()
    const createProteinUseCase = new CreateProteinUseCase(proteinRepository)

    return createProteinUseCase
}