import { FastifyReply, FastifyRequest } from "fastify";
import { env } from "../../env";


export async function verifyApiKey(request: FastifyRequest, reply: FastifyReply){
    try{
        const apiKey = request.headers['x-api-key'];

        if(apiKey !== env.API_KEY){
            reply.status(403).send({error: "x-api-key header missing"})
        }
    }catch(error){
        return reply.status(403).send({error: "x-api-key header missing"})
    }
}