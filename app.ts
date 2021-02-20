import dotenv from 'dotenv';
import Server from './models/server';

// configurar dontenv
dotenv.config();

const server = new Server();

server.listen();