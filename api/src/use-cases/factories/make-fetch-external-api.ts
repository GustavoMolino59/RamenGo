import { PrismaBrothsRepository } from "../../respositories/prisma/prisma-broths-repository";
import { FetchExternalApiUseCase } from "../fetch-external-api";
import { GetBrothsUseCase } from "../get-all-broths";



export function makeFetchExternalApiUseCase(){
    const fetchExternalApiUseCase = new FetchExternalApiUseCase()

    return fetchExternalApiUseCase
}