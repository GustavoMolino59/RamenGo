import { BrothsRepository } from "@/respositories/broths-repositorys"
import { Broth } from "@prisma/client"


interface CreateBrothUseCaseRequest {
    imageInactive:string
    imageActive:string
    name:string
    description:string
    price:number
}


interface CreateBrothsUseCaseResponse{
    broth: Broth
}

export class CreateBrothUseCase {
    constructor( private brothRepository: BrothsRepository){}

    async execute({
        imageInactive, 
        imageActive,
        name,
        description,
        price
    }:CreateBrothUseCaseRequest):Promise<CreateBrothsUseCaseResponse>{
        const broth = await this.brothRepository.create({
            imageActive,
            imageInactive,
            name,
            description,
            price
        })

        return { broth}
    }
}