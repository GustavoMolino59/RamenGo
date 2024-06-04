import { Broth, } from "@prisma/client";
import { BrothsRepository } from "../respositories/broths-repositorys";

interface GetBrothsUseCaseResponse {
    broths: Broth[]
}

export class GetBrothsUseCase {
    constructor(private brothsRepository : BrothsRepository){}

    async execute (): Promise<GetBrothsUseCaseResponse>{
        const broths = await this.brothsRepository.findAll()

        return {
            broths,
        }
    }
}
