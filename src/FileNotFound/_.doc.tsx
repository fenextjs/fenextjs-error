export default {
    id: "errorFileNotFound",
    name: "ErrorFileNotFound",
    description: "Clase que representa un error de archivo no encontrado en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.FILE_NOT_FOUND",
            description: "Código de error específico que indica que el archivo no se encontró.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"File not Found\"",
            description: "Mensaje de error que describe la ausencia del archivo solicitado.",
        },
    ],
};
