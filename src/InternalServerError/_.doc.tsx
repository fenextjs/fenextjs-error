export default {
    id: "errorInternalServerError",
    name: "ErrorInternalServerError",
    description: "Clase que representa un error de servidor interno (HTTP 500) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.INTERNAL_SERVER_ERROR",
            description: "Código de error específico que indica un error interno del servidor.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Internal Server Error\"",
            description: "Mensaje de error que describe la naturaleza del error cuando ocurre un fallo interno del servidor.",
        },
    ],
};
