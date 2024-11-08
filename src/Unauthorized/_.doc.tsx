export default {
    id: "errorUnauthorized",
    name: "ErrorUnauthorized",
    description: "Clase que representa un error de acceso no autorizado (HTTP 401) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.UNAUTHORIZED",
            description: "Código de error específico que indica que el usuario no está autorizado para realizar la acción solicitada.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Unauthorized\"",
            description: "Mensaje de error que describe la naturaleza del problema cuando el acceso está prohibido por falta de autorización.",
        },
    ],
};
