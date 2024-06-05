
import { InMemoryBrothsRepository } from "@/respositories/in-memory/in-memory-broths-repository"
import { beforeEach, describe, expect, it } from "vitest"
import { CreateBrothUseCase } from "../src/use-cases/create-broths"


let brothRepository: InMemoryBrothsRepository
let sut: CreateBrothUseCase

describe('Create broths Use Case', () => {
  beforeEach(() => {
    brothRepository = new InMemoryBrothsRepository()
    sut = new CreateBrothUseCase(brothRepository)
  })

  it('should to create broth', async () => {
    const { broth } = await sut.execute({
        imageInactive:'teste', 
        imageActive: 'teste2',
        name: 'nameTest',
        description: 'test description',
        price: 10
    })

    expect(broth).toEqual({
        id: 1,
        imageInactive:'teste', 
        imageActive: 'teste2',
        name: 'nameTest',
        description: 'test description',
        price: 10
    })
  })
})