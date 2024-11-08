export default {
    id: "errorTimeout",
    name: "ErrorTimeout",
    description: "Clase que representa un error de tiempo de espera en la solicitud (HTTP 408) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.TIMEOUT",
            description: "Código de error específico que indica que la solicitud ha excedido el tiempo de espera permitido.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Request Timeout\"",
            description: "Mensaje de error que describe la naturaleza del problema cuando se excede el tiempo de espera para la solicitud.",
        },
    ],
};
