export default {
    id: "errorUserTokenInvalid",
    name: "ErrorUserTokenInvalid",
    description:
        "Clase que representa un error de token de usuario inválido (HTTP 401) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.USER_TOKEN_INVALID",
            description:
                "Código de error específico que indica que el token de usuario proporcionado es inválido.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Invalid Token"',
            description:
                "Mensaje de error que describe la naturaleza del problema cuando el token de usuario no es válido.",
        },
    ],
};
