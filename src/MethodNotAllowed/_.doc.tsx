export default {
    id: "errorMethodNotAllowed",
    name: "ErrorMethodNotAllowed",
    description:
        "Clase que representa un error de método no permitido (HTTP 405) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.METHOD_NOT_ALLOWED",
            description:
                "Código de error específico que indica que el método HTTP utilizado no está permitido.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Method Not Allowed"',
            description:
                "Mensaje de error que describe la naturaleza del problema cuando se intenta usar un método HTTP no permitido.",
        },
    ],
};
