import { PrismaBrothsRepository } from "../../respositories/prisma/prisma-broths-repository";
import { GetBrothsUseCase } from "../get-all-broths";



export function makeGetAllBrothsUseCase(){
    const brothsRepository = new PrismaBrothsRepository()
    const getBrothsUseCase = new GetBrothsUseCase(brothsRepository)

    return getBrothsUseCase
}