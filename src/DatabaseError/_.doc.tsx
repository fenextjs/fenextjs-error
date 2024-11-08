export default {
    id: "errorDatabaseError",
    name: "ErrorDatabaseError",
    description:
        "Clase que representa un error de base de datos en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.DATABASE_ERROR",
            description:
                "Código de error específico que representa un problema en la base de datos.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Database Error"',
            description:
                "Mensaje de error que describe la naturaleza del problema en la base de datos.",
        },
    ],
};
