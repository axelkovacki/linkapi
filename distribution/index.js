"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var HttpServer_1 = __importDefault(require("./infrastructure/http/HttpServer"));
var Database_1 = __importDefault(require("./infrastructure/database/Database"));
dotenv_1.default.config();
try {
    var server = new HttpServer_1.default();
    server.init();
    var database = new Database_1.default();
    database.init();
}
catch (err) {
    console.log(err);
}
