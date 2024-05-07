import { emitirTextoEditor } from "./socket-front-document.js";


const textEditor = document.getElementById("editor-texto");

textEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textEditor.value);
});

function atualizaTextoEditor(texto) {
    textEditor.value = texto;
}

export { atualizaTextoEditor };