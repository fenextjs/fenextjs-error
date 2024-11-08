export default {
    id: "errorNotAcceptable",
    name: "ErrorNotAcceptable",
    description:
        "Clase que representa un error de recurso no aceptable (HTTP 406) en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.NOT_ACCEPTABLE",
            description:
                "Código de error específico que indica que el recurso solicitado no es aceptable según los encabezados de la solicitud.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Not Acceptable"',
            description:
                "Mensaje de error que describe la naturaleza del error cuando el recurso solicitado no es aceptable.",
        },
    ],
};
