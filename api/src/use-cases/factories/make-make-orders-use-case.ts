import { PrismaBrothsRepository } from "../../respositories/prisma/prisma-broths-repository";
import { PrismaProteinRespository } from "../../respositories/prisma/prisma-protein-repository";
import { GetProteinUseCase } from "../get-all-proteins";
import { MakeOrderUseCase } from "../make-order";



export function makeMakeOrderUseCase(){
    const brothsRepository = new PrismaBrothsRepository()
    const ProteinsRepository = new PrismaProteinRespository()
    const makeOrderUseCase = new MakeOrderUseCase(brothsRepository, ProteinsRepository)

    return makeOrderUseCase
}