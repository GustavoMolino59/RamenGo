

import { Prisma, Protein } from "@prisma/client";
import { ProteinsRepository } from "../proteins-repository";




export class InMemoryProteinsRepository implements ProteinsRepository{
    public items: Protein[] = []
    public count:number = 1

    async create(data: Prisma.ProteinCreateInput): Promise<{ id: number; imageInactive: string; imageActive: string; name: string; description: string; price: number; }> {
         const protein = {
            id: this.count,
            imageInactive: data.imageInactive,
            imageActive: data.imageActive,
            name: data.name,
            description: data.description,
            price: data.price,   
          }
      
          this.items.push(protein)
      
          return protein
    }
    async findAll(): Promise<{ id: number; imageInactive: string; imageActive: string; name: string; description: string; price: number; }[]> {
        return this.items

    }
    async findById(id: number): Promise<{ id: number; imageInactive: string; imageActive: string; name: string; description: string; price: number; } | null> {
        const protein = this.items.find((item) => item.id === id)

        if (!protein) {
          return null
        }
    
        return protein
    }
 
 
}