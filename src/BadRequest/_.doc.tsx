export default {
    id: "errorBadRequest",
    name: "ErrorBadRequest",
    description:
        "Clase que representa un error de solicitud incorrecta (HTTP 400) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.BAD_REQUEST",
            description:
                "Código de error específico que representa una solicitud incorrecta.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Bad Request"',
            description:
                "Mensaje de error que describe la naturaleza del problema.",
        },
    ],
};
