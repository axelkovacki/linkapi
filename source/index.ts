import Dotenv from 'dotenv';
import Server from './infrastructure/http/HttpServer';
import Database from './infrastructure/database/Database';

Dotenv.config();

try {
    const server = new Server();
    server.init();

    const database = new Database();
    database.init();
} catch (err) {
    console.log(err);
}

