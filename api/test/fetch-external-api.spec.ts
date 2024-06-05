import { beforeEach, describe, expect, it } from "vitest";
import { FetchExternalApiUseCase } from "../src/use-cases/fetch-external-api";
import {env} from '@/env'
import { ErrorExternalApiError } from "../src/use-cases/errors/error-external-api";



describe('Use Case of communicating with the external API', () => {
    let sut: FetchExternalApiUseCase;

    beforeEach(async () => {
        sut = new FetchExternalApiUseCase()

    });

    it('should be able to get order id', async () => {
        const apiKey = env.API_KEY;
        const {orderId} = await sut.execute({apiKey})
        console.log(orderId)
        expect(orderId).toEqual(expect.any(String))
    });
    it('should be able to get order id', async () => {
        const apiKey = 'Test'
        await expect(() =>
            sut.execute({
                apiKey
            }),
          ).rejects.toBeInstanceOf(ErrorExternalApiError)
    });
});