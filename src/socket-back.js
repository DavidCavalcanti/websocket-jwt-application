import io from "./servidor.js";

const documentos = [
    {
        nome: "JavaScript",
        texto: "Texto de Javascript..."
    },
    {
        nome: "Node",
        texto: "Texto de Node..."
    },
    {
        nome: "Socket.io",
        texto: "Texto de Socket.io..."
    },
];


io.on('connection', (socket) => {
    console.log(`\nO cliente ${socket.id} se conectou!`);

    socket.on("selecionar_documento", (nomeDocumento, retornarTexto) => {
        socket.join(nomeDocumento);

        const documento = encontraDocumento(nomeDocumento);

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
    const documento = documentos.find((documento) => {
        return documento.nome === nome;
    })

    return documento;
}
