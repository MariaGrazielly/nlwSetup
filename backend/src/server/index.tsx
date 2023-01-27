import Fastify from 'fastify';
import cors from '@fastify/cors';
import {PrismaClient} from '@prisma/client';

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors);

/**
 * Metodo HTTP: get, post, put, patch, delete
 */

app.get('/', async () =>{
    const habits = await prisma.habit.findMany();
    return habits;
})

app.listen({
    port: 3333,
}).then(()=>{
    console.log('HTTP server running!');
})