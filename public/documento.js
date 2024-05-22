import { emitirTextoEditor, selecionarDocumento } from "./socket-front-document.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const textEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem título";

selecionarDocumento(nomeDocumento);

textEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
        texto: textEditor.value,
        nomeDocumento
    });
});

function atualizaTextoEditor(texto) {
    textEditor.value = texto;
}

export { atualizaTextoEditor };