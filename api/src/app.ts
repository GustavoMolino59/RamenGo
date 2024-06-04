import fastify from 'fastify'
import fastifyStatic from '@fastify/static';
import path from 'path';
import cors from '@fastify/cors'
import { brothRoutes } from './http/controllers/broths/routes';
import { proteinRoutes } from './http/controllers/proteins/routes';
import { ordersRoutes } from './http/controllers/orders/routes';
import { env } from './env';
import { ZodError } from 'zod';
import { verifyApiKey } from './http/middlewares/verify-api-key';
import { MissingItemRequiredError } from './use-cases/errors/missing-item-required';
import { ProblemMakeOrder } from './use-cases/errors/problem-make-order';
import { BrothNotExistsError } from './use-cases/errors/both-not-exist';
import { ProteinNotExistsError } from './use-cases/errors/protein-not-exist';

export const app = fastify()
console.log('passou aqui')
app.register(cors, {
  origin: 'http://localhost:5173', // Permitir requisições apenas de 'http://localhost:5173'
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir apenas esses métodos
});
app.register(fastifyStatic, {
  root: path.join(__dirname, '../uploads'),
  prefix: '/files', // Prefixo para a rota de arquivos estáticos
});


app.register(brothRoutes)
app.register(proteinRoutes)
app.register(ordersRoutes)

app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
      return reply
        .status(400)
        .send({ message: 'Validation error.', issues: error.format() })
    }
    if(error instanceof MissingItemRequiredError){
      return reply
      .status(400)
      .send( {error: error.message})
    }
    if(error instanceof ProblemMakeOrder || error instanceof BrothNotExistsError || error instanceof ProteinNotExistsError){
      return reply
      .status(500)
      .send( {error: 'could not place order'})
    }
    if (env.NODE_ENV !== 'production') {
      console.error(error)
    } else {
      // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
    }
  
    return reply.status(500).send({ message: 'Internal server error.' })
  })
