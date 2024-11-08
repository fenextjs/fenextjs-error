export default {
    id: "errorInputPatternMismatch",
    name: "ErrorInputPatternMismatch",
    description: "Clase que representa un error de coincidencia de patrón de entrada en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.INPUT_PATTERN_MISMATCH",
            description: "Código de error específico que indica que la entrada no coincide con el patrón esperado.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Input Pattern Mismatch\"",
            description: "Mensaje de error que describe la naturaleza del error cuando la entrada no cumple con el patrón esperado.",
        },
        {
            id: "input",
            type: "string",
            required: false,
            description: "Texto opcional que proporciona información sobre la entrada que causó el error.",
        },
    ],
};
