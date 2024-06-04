import { InMemoryProteinsRepository } from "@/respositories/in-memory/in-memory-proteins-repository"
import { CreateProteinUseCase } from "./create-proteins"
import { beforeEach, describe, expect, it } from "vitest"


let proteinRepository: InMemoryProteinsRepository
let sut: CreateProteinUseCase

describe('Create proteins Use Case', () => {
  beforeEach(() => {
    proteinRepository = new InMemoryProteinsRepository()
    sut = new CreateProteinUseCase(proteinRepository)
  })

  it('should to create protein', async () => {
    const { protein } = await sut.execute({
        imageInactive:'teste', 
        imageActive: 'teste2',
        name: 'nameTest',
        description: 'test description',
        price: 10
    })

    expect(protein).toEqual({
        id: 1,
        imageInactive:'teste', 
        imageActive: 'teste2',
        name: 'nameTest',
        description: 'test description',
        price: 10
    })
  })
})