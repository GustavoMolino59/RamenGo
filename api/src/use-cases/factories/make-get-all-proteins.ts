import { PrismaProteinRespository } from "@/respositories/prisma/prisma-protein-repository";
import { GetProteinUseCase } from "../get-all-proteins";



export function makeGetAllProteinUseCase(){
    const proteinRepository = new PrismaProteinRespository()
    const getProteinsUseCase = new GetProteinUseCase(proteinRepository)

    return getProteinsUseCase
}