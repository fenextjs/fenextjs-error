export default {
    id: "errorServiceUnavailable",
    name: "ErrorServiceUnavailable",
    description: "Clase que representa un error de servicio no disponible (HTTP 503) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.SERVICE_UNAVAILABLE",
            description: "Código de error específico que indica que el servicio no está disponible temporalmente.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Service Unavailable\"",
            description: "Mensaje de error que describe la naturaleza del problema cuando el servicio no está disponible.",
        },
    ],
};
