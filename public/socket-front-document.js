import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nomeDocumento) {
    socket.emit("selecionar_documento", nomeDocumento);
}

function emitirTextoEditor(texto, nomeDocumento) {
    socket.emit("texto_editor", texto, nomeDocumento);
}

socket.on("texto_editor_cliente", (texto) => {
    atualizaTextoEditor(texto);
});

export { emitirTextoEditor, selecionarDocumento };