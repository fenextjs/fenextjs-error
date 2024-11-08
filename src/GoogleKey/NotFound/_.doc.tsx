export default {
    id: "errorGoogleKeyNotFound",
    name: "ErrorGoogleKeyNotFound",
    description: "Clase que representa un error de clave de Google no encontrada en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.GOOGLE_KEY_NOT_FOUND",
            description: "Código de error específico que indica que la clave de Google no se encuentra.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Google Key not Found\"",
            description: "Mensaje de error que describe la ausencia de la clave de Google.",
        },
    ],
};
