export default {
    id: "errorRequestTimeout",
    name: "ErrorRequestTimeout",
    description:
        "Clase que representa un error de tiempo de espera de la solicitud (HTTP 408) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.REQUEST_TIMEOUT",
            description:
                "Código de error específico que indica que el servidor no recibió una solicitud completa en el tiempo esperado.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Request Timeout"',
            description:
                "Mensaje de error que describe la naturaleza del problema cuando se excede el tiempo de espera para una solicitud.",
        },
    ],
};
