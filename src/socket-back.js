import "dotenv/config";
import { documentosColecao } from "./db_connection.js";
import io from "./servidor.js";

io.on('connection', (socket) => {
    console.log(`\nO cliente ${socket.id} se conectou!`);

    socket.on("selecionar_documento", async (nomeDocumento, retornarTexto) => {
        socket.join(nomeDocumento);

        const documento = await encontraDocumento(nomeDocumento);

        if (documento) {
            retornarTexto(documento);
        }

    });

    socket.on("texto_editor", ({ texto, nomeDocumento }) => {
        const documento = encontraDocumento(nomeDocumento);

        if (nomeDocumento) {
            documento.texto = texto;
        }

        socket.to(nomeDocumento).emit("texto_editor_cliente", texto);
    });
});

function encontraDocumento(nome) {
    const documento = documentosColecao.findOne({
        nome
    });

    return documento;
}
