import { ProteinsRepository } from "@/respositories/proteins-repository"
import { Protein } from "@prisma/client"


interface CreateProteinUseCaseRequest {
    imageInactive:string
    imageActive:string
    name:string
    description:string
    price:number
}


interface CreateProteinsUseCaseResponse{
    protein: Protein
}

export class CreateProteinUseCase {
    constructor( private proteinRepository: ProteinsRepository){}

    async execute({
        imageInactive, 
        imageActive,
        name,
        description,
        price
    }:CreateProteinUseCaseRequest):Promise<CreateProteinsUseCaseResponse>{
        const protein = await this.proteinRepository.create({
            imageActive,
            imageInactive,
            name,
            description,
            price
        })

        return { protein}
    }
}