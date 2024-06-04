import { BrothsRepository } from "../respositories/broths-repositorys";
import { ProteinsRepository } from "../respositories/proteins-repository";
import { BrothNotExistsError } from "./errors/both-not-exist";
import { ProblemMakeOrder } from "./errors/problem-make-order";
import { ProteinNotExistsError } from "./errors/protein-not-exist";



interface MakeOrderUseCaseRequest{
    brothId: number,
    proteinId:number,
}


interface MakeOrderUseCaseResponse{
    description:string,
    image: string,
}


export class MakeOrderUseCase{
    constructor(
        private brothsRepository: BrothsRepository,
        private proteinRepository: ProteinsRepository
    ){}

    async execute({brothId, proteinId}: MakeOrderUseCaseRequest):Promise<MakeOrderUseCaseResponse> {
        
        
        try{
        const broth = await this.brothsRepository.findById(brothId)

        if(!broth){
            throw new BrothNotExistsError()
        }
        const protein = await this.proteinRepository.findById(proteinId);

        if(!protein){
            throw new ProteinNotExistsError()
        }

        const description = broth.name + ' and ' + protein.name + ' Ramen'

        return{
            description,
            image: protein.name
        }
    }catch(err){
        throw new ProblemMakeOrder()
    }
    }
}