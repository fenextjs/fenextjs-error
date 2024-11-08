export default {
    id: "errorInputOutOfRange",
    name: "ErrorInputOutOfRange",
    description:
        "Clase que representa un error de entrada fuera de rango en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.INPUT_OUT_OF_RANGE",
            description:
                "Código de error específico que indica que la entrada está fuera del rango permitido.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Input Out of Range"',
            description:
                "Mensaje de error que describe la naturaleza del error cuando la entrada está fuera del rango permitido. Si se proporciona un rango específico, el mensaje lo incluirá.",
        },
        {
            id: "input",
            type: "string",
            required: false,
            description:
                "Texto opcional que proporciona información sobre la entrada que causó el error.",
        },
        {
            id: "range",
            type: "number[]",
            required: false,
            description:
                "Rango opcional que especifica los valores permitidos para la entrada. El mensaje incluirá el rango si se proporciona.",
        },
    ],
};
