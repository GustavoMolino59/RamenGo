import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetAllProteinUseCase } from "../../../use-cases/factories/make-get-all-proteins";

export async function proteins(request:FastifyRequest, reply: FastifyReply) {
    
    const getProteinsUseCase = makeGetAllProteinUseCase()    

    const {proteins} = await getProteinsUseCase.execute()

    return reply.status(200).send({
        proteins
    })
}