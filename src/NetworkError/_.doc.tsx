export default {
    id: "errorNetworkError",
    name: "ErrorNetworkError",
    description:
        "Clase que representa un error de red en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.NETWORK_ERROR",
            description:
                "Código de error específico que indica un error relacionado con la red.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Network Error"',
            description:
                "Mensaje de error que describe la naturaleza del problema relacionado con la red.",
        },
    ],
};
