const socket = io();

const textEditor = document.getElementById("editor-texto");

textEditor.addEventListener("keyup", () => {
    socket.emit("texto_editor", textEditor.value);
});