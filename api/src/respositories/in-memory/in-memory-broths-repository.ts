import { Prisma, Broth } from "@prisma/client";
import { BrothsRepository } from "../broths-repositorys";


export class InMemoryBrothsRepository implements BrothsRepository {

    public items: Broth[] = []
    public count:number = 1;
    async create(data: Prisma.BrothCreateInput) {
        const broth = {
            id: this.count,
            imageInactive: data.imageInactive,
            imageActive: data.imageActive,
            name: data.name,
            description: data.description,
            price: data.price,   
          }
      
          this.items.push(broth)
      
          return broth
    }
    async findAll(): Promise<{ id: number; imageInactive: string; imageActive: string; name: string; description: string; price: number; }[]> {
        return this.items
    }
    async findById(id: number): Promise<{ id: number; imageInactive: string; imageActive: string; name: string; description: string; price: number; } | null> {
        const broth = this.items.find((item) => item.id === id)

        if (!broth) {
          return null
        }
    
        return broth
    
    }

    
     
}