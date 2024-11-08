export default {
    id: "errorInputValueTooLow",
    name: "ErrorInputValueTooLow",
    description: "Clase que representa un error de valor de entrada demasiado bajo en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.INPUT_VALUE_TOO_LOW",
            description: "Código de error específico que indica que el valor de la entrada es demasiado bajo.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Input Value Too Low\"",
            description: "Mensaje de error que describe la naturaleza del error cuando el valor de la entrada es inferior al valor mínimo permitido. Si se proporciona un valor mínimo, el mensaje lo incluirá.",
        },
        {
            id: "input",
            type: "string",
            required: false,
            description: "Texto opcional que proporciona información sobre la entrada que causó el error.",
        },
        {
            id: "min",
            type: "number | Date",
            required: false,
            description: "Valor opcional que especifica el valor mínimo permitido para la entrada. El mensaje incluirá este valor si se proporciona.",
        },
    ],
};
