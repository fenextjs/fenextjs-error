export default {
    id: "errorInputTooLong",
    name: "ErrorInputTooLong",
    description: "Clase que representa un error de entrada demasiado larga en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.INPUT_TOO_LONG",
            description: "Código de error específico que indica que la entrada es demasiado larga.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Input Too Long\"",
            description: "Mensaje de error que describe la naturaleza del error cuando la entrada excede la longitud máxima permitida. Si se proporciona un valor máximo, el mensaje lo incluirá.",
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
            description: "Valor opcional que especifica la longitud máxima permitida para la entrada. El mensaje incluirá este valor si se proporciona.",
        },
    ],
};
