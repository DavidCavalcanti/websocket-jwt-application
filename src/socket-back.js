import "dotenv/config";
import { atualizaTexto, encontraDocumento } from "./documentosDB.js";
import io from "./servidor.js";

io.on('connection', (socket) => {    

    socket.on("selecionar_documento", async (nomeDocumento, retornarTexto) => {
        console.log(`\nO cliente ${socket.id} se conectou na sala ${nomeDocumento}!`);

        socket.join(nomeDocumento);

        const documento = await encontraDocumento(nomeDocumento);

        if (documento) {
            retornarTexto(documento);
        }

    });

    socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
        const atualizacao = await atualizaTexto(nomeDocumento, texto);
        
        if (atualizacao.modifiedCount) {
            socket.to(nomeDocumento).emit("texto_editor_cliente", texto);
        }
    });
});
