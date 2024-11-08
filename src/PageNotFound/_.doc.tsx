export default {
    id: "errorPageNotFound",
    name: "ErrorPageNotFound",
    description: "Clase que representa un error de página no encontrada (HTTP 404) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.PAGE_NOT_FOUND",
            description: "Código de error específico que indica que la página solicitada no se encuentra en el servidor.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Page not Found\"",
            description: "Mensaje de error que describe la naturaleza del problema cuando la página solicitada no está disponible.",
        },
    ],
};
