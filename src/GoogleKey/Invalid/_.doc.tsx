export default {
    id: "errorGoogleKeyInvalid",
    name: "ErrorGoogleKeyInvalid",
    description: "Clase que representa un error de clave de Google no válida en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.GOOGLE_KEY_INVALID",
            description: "Código de error específico que indica que la clave de Google proporcionada no es válida.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Invalid Google Key\"",
            description: "Mensaje de error que describe la invalidez de la clave de Google.",
        },
    ],
};
