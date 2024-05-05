import express from "express";
import path from "path";
import url from "url";

const app = express();
const porta = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublic = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublic));

app.listen(porta, () => {
    console.log(`servidor escutando em http://localhost:${porta}`);
});