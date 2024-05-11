import io from "./servidor.js";

io.on('connection', (socket) => {
    console.log(`O cliente ${socket.id} se conectou!`);

    socket.on("selecionar_documento", (nomeDocumento) => {
        console.log(nomeDocumento);
        socket.join(nomeDocumento);
    });

    socket.on("texto_editor", ({ texto, nomeDocumento }) => {
        socket.to(nomeDocumento).emit("texto_editor_cliente", texto);
    });
});

