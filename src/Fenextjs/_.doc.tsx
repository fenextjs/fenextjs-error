export default {
    id: "errorFenextjs",
    name: "ErrorFenextjs",
    description:
        "Clase base para representar errores en la biblioteca Fenextjs, proporcionando un código de error, mensaje y datos opcionales.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.ERROR",
            description:
                "Código de error específico que identifica el tipo de error.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '""',
            description:
                "Mensaje de error que describe la naturaleza del problema.",
        },
        {
            id: "msg",
            type: "string",
            required: false,
            default: '""',
            description:
                "Mensaje adicional del error, sin formato ni modificación.",
        },
        {
            id: "input",
            type: "string",
            required: false,
            description:
                "Texto opcional que proporciona información adicional sobre el error o el input que lo causó.",
        },
        {
            id: "data",
            type: "D",
            required: false,
            description:
                "Datos adicionales que pueden acompañar al error, parametrizables según el tipo `D`.",
        },
    ],
};
