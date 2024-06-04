
import { PrismaBrothsRepository } from "@/respositories/prisma/prisma-broths-repository";
import { CreateProteinUseCase } from "../create-proteins";
import { CreateBrothUseCase } from "../create-broths";




export function makeCreateBrothUseCase(){
    const brothRepository = new PrismaBrothsRepository()
    const createBrothsUseCase = new CreateBrothUseCase(brothRepository)

    return createBrothsUseCase
}