import { makeCreateProteinUseCase } from "@/use-cases/factories/make-create-protein-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function create(request: FastifyRequest, reply: FastifyReply) {
    const createProteinBodySchema = z.object({
        imageInactive: z.string(),
        imageActive  : z.string(),
        name         : z.string(),
        description  : z.string(),
        price        : z.coerce.number()

    })

    const {imageInactive,imageActive, name ,description, price} = createProteinBodySchema.parse(request.body)

    const createProteinuseCase = makeCreateProteinUseCase()

    await createProteinuseCase.execute({
        imageInactive,
        imageActive, 
        name ,
        description, 
        price}
    )
    return reply.status(201).send()
}