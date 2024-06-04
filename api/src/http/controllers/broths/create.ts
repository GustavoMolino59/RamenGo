import { makeCreateBrothUseCase } from "@/use-cases/factories/make-create-broths-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function create(request: FastifyRequest, reply: FastifyReply) {
    const createBrothBodySchema = z.object({
        imageInactive: z.string(),
        imageActive  : z.string(),
        name         : z.string(),
        description  : z.string(),
        price        : z.coerce.number()

    })

    const {imageInactive,imageActive, name ,description, price} = createBrothBodySchema.parse(request.body)

    const createbrothuseCase = makeCreateBrothUseCase()

    await createbrothuseCase.execute({
        imageInactive,
        imageActive, 
        name ,
        description, 
        price}
    )
    return reply.status(201).send()
}