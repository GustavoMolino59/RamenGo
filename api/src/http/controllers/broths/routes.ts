import { FastifyInstance } from "fastify";
import { makeGetAllBrothsUseCase } from "../../../use-cases/factories/make-get-all-broths-use-case";
import { broths } from "./broths";
import { create } from "./create";
import { verifyApiKey } from "@/http/middlewares/verify-api-key";



export async function brothRoutes(app:FastifyInstance) {
    
    app.addHook('onRequest',verifyApiKey); //middleware

    app.post('/broths', create)

    app.get('/broths', broths)
}