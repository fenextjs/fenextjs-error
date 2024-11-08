export default {
    id: "errorNotImplemented",
    name: "ErrorNotImplemented",
    description:
        "Clase que representa un error de método no implementado (HTTP 501) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.NOT_IMPLEMENTED",
            description:
                "Código de error específico que indica que el servidor no soporta el método solicitado.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Not Implemented"',
            description:
                "Mensaje de error que describe la naturaleza del problema cuando un método no está implementado en el servidor.",
        },
    ],
};
