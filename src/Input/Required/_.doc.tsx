export default {
    id: "errorInputRequired",
    name: "ErrorInputRequired",
    description: "Clase que representa un error de entrada obligatoria en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.INPUT_REQUIRED",
            description: "Código de error específico que indica que la entrada es obligatoria y no se proporcionó.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: "\"Input Required\"",
            description: "Mensaje de error que describe la naturaleza del error cuando la entrada requerida no se proporciona.",
        },
        {
            id: "input",
            type: "string",
            required: false,
            description: "Texto opcional que proporciona información sobre la entrada que causó el error.",
        },
    ],
};
