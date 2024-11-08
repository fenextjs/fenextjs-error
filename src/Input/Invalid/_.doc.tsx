export default {
    id: "errorInputInvalid",
    name: "ErrorInputInvalid",
    description:
        "Clase que representa un error de entrada no válida en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.INPUT_INVALID",
            description:
                "Código de error específico que indica que la entrada proporcionada no es válida.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Invalid Input"',
            description:
                "Mensaje de error que describe la naturaleza del error relacionado con la entrada no válida.",
        },
        {
            id: "input",
            type: "string",
            required: false,
            description:
                "Texto opcional que proporciona información sobre la entrada que causó el error.",
        },
    ],
};
