export default {
    id: "errorInputLength",
    name: "ErrorInputLength",
    description: "Clase que representa un error de longitud de entrada no válida en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.INPUT_LENGTH",
            description: "Código de error específico que indica que la longitud de la entrada no es válida.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Input not length\"",
            description: "Mensaje de error que describe la naturaleza del error relacionado con la longitud de la entrada. Si se proporciona una longitud específica, el mensaje la incluye.",
        },
        {
            id: "input",
            type: "string",
            required: false,
            description: "Texto opcional que proporciona información sobre la entrada que causó el error.",
        },
        {
            id: "length",
            type: "number | Date",
            required: false,
            description: "Valor opcional que especifica la longitud esperada de la entrada o una fecha asociada con la entrada.",
        },
    ],
};
