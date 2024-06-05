import { beforeEach, describe, expect, it } from "vitest";
import { GetBrothsUseCase } from "../src/use-cases/get-all-broths";
import { InMemoryProteinsRepository } from "@/respositories/in-memory/in-memory-proteins-repository";
import { GetProteinUseCase } from "../src/use-cases/get-all-proteins";


describe('Get all proteins Use Case', () => {
    let proteinsRepository: InMemoryProteinsRepository;
    let sut: GetProteinUseCase;

    beforeEach(async () => {
        proteinsRepository = new InMemoryProteinsRepository();
        sut = new GetProteinUseCase(proteinsRepository);

        await proteinsRepository.create({
            imageActive: 'testActive',
            imageInactive: 'testeInactive',
            name: 'nameTest',
            description: 'descriptionTest',
            price: 10
        });

        await proteinsRepository.create({
            imageActive: 'testActive2',
            imageInactive: 'testeInactive2',
            name: 'nameTest2',
            description: 'descriptionTest2',
            price: 20
        });
    });

    it('should be able to get all proteins', async () => {
        const { proteins } = await sut.execute();

        expect(proteins).toHaveLength(2);
        expect(proteins).toEqual([
            expect.objectContaining({ name: 'nameTest' }),
            expect.objectContaining({ name: 'nameTest2' }),
        ]);
    });

    
});