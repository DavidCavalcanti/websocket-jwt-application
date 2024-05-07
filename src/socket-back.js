import io from "./servidor.js";

io.on('connection', (socket) => {
    console.log(`O cliente ${socket.id} se conectou!`);

    socket.on("texto_editor", (texto) => {
        socket.broadcast.emit("texto_editor_cliente", texto);
    })
});

