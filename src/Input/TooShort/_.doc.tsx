export default {
    id: "errorInputTooShort",
    name: "ErrorInputTooShort",
    description: "Clase que representa un error de entrada demasiado corta en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.INPUT_TOO_SHORT",
            description: "Código de error específico que indica que la entrada es demasiado corta.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Input Too Short\"",
            description: "Mensaje de error que describe la naturaleza del error cuando la entrada es más corta que la longitud mínima permitida. Si se proporciona un valor mínimo, el mensaje lo incluirá.",
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
            description: "Valor opcional que especifica la longitud mínima permitida para la entrada. El mensaje incluirá este valor si se proporciona.",
        },
    ],
};
