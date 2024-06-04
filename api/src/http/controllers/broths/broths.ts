

import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetAllBrothsUseCase } from "../../../use-cases/factories/make-get-all-broths-use-case";

export async function broths(request:FastifyRequest, reply: FastifyReply) {
    
    const getBrothsUseCase = makeGetAllBrothsUseCase()    

    const {broths} = await getBrothsUseCase.execute()

    return reply.status(200).send({
        broths
    })
}