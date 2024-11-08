export default {
    id: "errorServerError",
    name: "ErrorServerError",
    description: "Clase que representa un error de servidor interno (HTTP 500) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.SERVER_ERROR",
            description: "Código de error específico que indica que el servidor encontró un error inesperado.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Internal Server Error\"",
            description: "Mensaje de error que describe la naturaleza del problema cuando el servidor encuentra un error interno.",
        },
    ],
};
