export default {
    id: "errorForbidden",
    name: "ErrorForbidden",
    description:
        "Clase que representa un error de acceso denegado (HTTP 403) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.FORBIDDEN",
            description:
                "Código de error específico que indica que el acceso está prohibido.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Forbidden"',
            description:
                "Mensaje de error que describe la restricción de acceso.",
        },
    ],
};
