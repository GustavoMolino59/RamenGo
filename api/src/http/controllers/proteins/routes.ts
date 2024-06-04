import { FastifyInstance } from "fastify";
import { proteins } from "./proteins";
import { create } from "./create";
import { verifyApiKey } from "@/http/middlewares/verify-api-key";



export async function proteinRoutes(app : FastifyInstance){
    app.addHook('onRequest',verifyApiKey); //middleware

    app.post('/proteins', create)
    app.get('/proteins', proteins)
    //Rota para criar não obrigatória mas utilizada pelo Seeder
    
}