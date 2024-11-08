export default {
    id: "errorTooManyRequests",
    name: "ErrorTooManyRequests",
    description:
        "Clase que representa un error de demasiadas solicitudes (HTTP 429) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.TOO_MANY_REQUESTS",
            description:
                "Código de error específico que indica que se ha excedido el límite de solicitudes permitidas.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Too Many Requests"',
            description:
                "Mensaje de error que describe la naturaleza del problema cuando se excede el límite de solicitudes.",
        },
    ],
};
