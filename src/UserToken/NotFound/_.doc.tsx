export default {
    id: "errorUserTokenNotFound",
    name: "ErrorUserTokenNotFound",
    description:
        "Clase que representa un error cuando el token de usuario no se encuentra (HTTP 401) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.USER_TOKEN_NOT_FOUND",
            description:
                "Código de error específico que indica que el token de usuario no fue encontrado.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Token not Found"',
            description:
                "Mensaje de error que describe la naturaleza del problema cuando el token de usuario no se encuentra.",
        },
    ],
};
