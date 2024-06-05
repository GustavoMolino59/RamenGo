import { InMemoryBrothsRepository } from "@/respositories/in-memory/in-memory-broths-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { GetBrothsUseCase } from "../src/use-cases/get-all-broths";


describe('Get all broths Use Case', () => {
    let brothsRepository: InMemoryBrothsRepository;
    let sut: GetBrothsUseCase;

    beforeEach(async () => {
        brothsRepository = new InMemoryBrothsRepository();
        sut = new GetBrothsUseCase(brothsRepository);

        await brothsRepository.create({
            imageActive: 'testActive',
            imageInactive: 'testeInactive',
            name: 'nameTest',
            description: 'descriptionTest',
            price: 10
        });

        await brothsRepository.create({
            imageActive: 'testActive2',
            imageInactive: 'testeInactive2',
            name: 'nameTest2',
            description: 'descriptionTest2',
            price: 20
        });
    });

    it('should be able to get all broths', async () => {
        const { broths } = await sut.execute();

        expect(broths).toHaveLength(2);
        expect(broths).toEqual([
            expect.objectContaining({ name: 'nameTest' }),
            expect.objectContaining({ name: 'nameTest2' }),
        ]);
    });
});