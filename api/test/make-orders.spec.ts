import { beforeEach, describe, expect, it } from "vitest";
import { MakeOrderUseCase } from "../src/use-cases/make-order";
import { InMemoryBrothsRepository } from "@/respositories/in-memory/in-memory-broths-repository";
import { InMemoryProteinsRepository } from "@/respositories/in-memory/in-memory-proteins-repository";
import { BrothNotExistsError } from "../src/use-cases/errors/both-not-exist";
import { ProteinNotExistsError } from "../src/use-cases/errors/protein-not-exist";




describe('Make a order use case', () => {
    let sut: MakeOrderUseCase;
    let brothsRepository: InMemoryBrothsRepository
    let proteinsRepository: InMemoryProteinsRepository
    beforeEach(async () => {
        brothsRepository = new InMemoryBrothsRepository()
        proteinsRepository = new InMemoryProteinsRepository()
        sut = new MakeOrderUseCase(brothsRepository, proteinsRepository)
       

    });

    it('should be able to make a order with the correct params', async () => {
        const broth = await brothsRepository.create({
            imageActive: 'testActive',
            imageInactive: 'testeInactive',
            name: 'nameTest',
            description: 'descriptionTest',
            price: 10
        });
        const protein = await proteinsRepository.create({
            imageActive: 'testActive',
            imageInactive: 'testeInactive',
            name: 'nameTest',
            description: 'descriptionTest',
            price: 10
        });
        const brothId = broth.id
        const proteinId = protein.id
        const order = await sut.execute({brothId, proteinId})
        expect(order.image).toEqual(protein.name)
        expect(order.description).toEqual(broth.description + ' and ' + protein.description + ' Ramen')
    });
    it('should not be able to get order with the incorrect params of broth', async () => {
        const broth = await brothsRepository.create({
            imageActive: 'testActive',
            imageInactive: 'testeInactive',
            name: 'nameTest',
            description: 'descriptionTest',
            price: 10
        });
        const protein = await proteinsRepository.create({
            imageActive: 'testActive',
            imageInactive: 'testeInactive',
            name: 'nameTest',
            description: 'descriptionTest',
            price: 10
        });
        const brothId = 999
        const proteinId = protein.id
        await expect(() =>
            sut.execute({brothId, proteinId}),
          ).rejects.toBeInstanceOf(BrothNotExistsError)
    });
    it('should not be able to get order with the incorrect params of protein', async () => {
        const broth = await brothsRepository.create({
            imageActive: 'testActive',
            imageInactive: 'testeInactive',
            name: 'nameTest',
            description: 'descriptionTest',
            price: 10
        });
        const protein = await proteinsRepository.create({
            imageActive: 'testActive',
            imageInactive: 'testeInactive',
            name: 'nameTest',
            description: 'descriptionTest',
            price: 10
        });
        const brothId = broth.id
        const proteinId = 999
        await expect(() =>
            sut.execute({brothId, proteinId}),
          ).rejects.toBeInstanceOf(ProteinNotExistsError)
    });
});