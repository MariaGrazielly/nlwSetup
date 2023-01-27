import Fastify from 'fastify';
import {PrismaClient} from '@prisma/client';

const app = Fastify()
const prisma = new PrismaClient()

/**
 * Metodo HTTP: get, post, put, patch, delete
 */

app.get('/', () =>{
    return 'olá'
})

app.listen({
    port: 3333,
}).then(()=>{
    console.log('HTTP server running!')
})