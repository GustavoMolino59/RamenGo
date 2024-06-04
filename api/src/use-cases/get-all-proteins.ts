
import { Protein } from "@prisma/client";
import { ProteinsRepository } from "../respositories/proteins-repository";

interface GetProteinUseCaseResponse {
    proteins: Protein[]
}

export class GetProteinUseCase {
    constructor(private proteinsRepository : ProteinsRepository){}

    async execute (): Promise<GetProteinUseCaseResponse>{
        const proteins = await this.proteinsRepository.findAll()

        return {
            proteins,
        }
    }
}