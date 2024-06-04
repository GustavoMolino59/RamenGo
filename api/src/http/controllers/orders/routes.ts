import { FastifyInstance } from "fastify";
import { makeOrder } from "./Order";
import { verifyApiKey } from "@/http/middlewares/verify-api-key";



export async function ordersRoutes(app : FastifyInstance){
    app.addHook('onRequest',verifyApiKey); //middleware

    app.post('/orders', makeOrder)
    //Rota para criar não obrigatória mas utilizada pelo Seeder
    
}