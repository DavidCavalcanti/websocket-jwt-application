import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
import url from "url";

const app = express();
const servidorHttp = http.createServer(app);
const io = new Server(servidorHttp);

const porta = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublic = path.join(caminhoAtual, "../..", "public");

app.use(express.static(diretorioPublic));

io.on('connection', (Socket) => {
    console.log("Um cliente se conectou!");
})

servidorHttp.listen(porta, () => {
    console.log(`servidor escutando em http://localhost:${porta}`);
});

