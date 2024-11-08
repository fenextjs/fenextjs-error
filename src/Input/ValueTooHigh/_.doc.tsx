export default {
    id: "errorInputValueTooHigh",
    name: "ErrorInputValueTooHigh",
    description: "Clase que representa un error de valor de entrada demasiado alto en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.INPUT_VALUE_TOO_HIGH",
            description: "Código de error específico que indica que el valor de la entrada es demasiado alto.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Input Value Too High\"",
            description: "Mensaje de error que describe la naturaleza del error cuando el valor de la entrada excede el valor máximo permitido. Si se proporciona un valor máximo, el mensaje lo incluirá.",
        },
        {
            id: "input",
            type: "string",
            required: false,
            description: "Texto opcional que proporciona información sobre la entrada que causó el error.",
        },
        {
            id: "max",
            type: "number | Date",
            required: false,
            description: "Valor opcional que especifica el valor máximo permitido para la entrada. El mensaje incluirá este valor si se proporciona.",
        },
    ],
};
