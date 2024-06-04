

import { FastifyReply, FastifyRequest } from "fastify";
import { MakeOrderUseCase } from "../../../use-cases/make-order";
import { makeMakeOrderUseCase } from "../../../use-cases/factories/make-make-orders-use-case";
import {z} from 'zod'
import { makeFetchExternalApiUseCase } from "../../../use-cases/factories/make-fetch-external-api";
import { MissingItemRequiredError } from "@/use-cases/errors/missing-item-required";
export async function makeOrder(request:FastifyRequest, reply: FastifyReply) {

    const createOrderSchema = z.object({
        brothId:  z.coerce.number(),
        proteinId:  z.coerce.number()
    })

    
    const {brothId, proteinId} = createOrderSchema.parse(request.body)
    console.log(brothId, proteinId)
    if(!brothId || ! proteinId){
        throw new MissingItemRequiredError()
    }
    const makeOrderUseCase = makeMakeOrderUseCase()


    const {description, image} = await makeOrderUseCase.execute({
        brothId,
        proteinId
    })

    const fetchExternalApiUseCase = makeFetchExternalApiUseCase()
    const apiKey = request.headers['x-api-key']// Assegura que a tipagem está correta
    const {orderId} = await fetchExternalApiUseCase.execute({apiKey})

    return reply.status(201).send({
        id: orderId,
        description,
        image

    })
    
}
