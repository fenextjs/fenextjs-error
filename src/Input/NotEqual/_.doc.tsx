export default {
    id: "errorInputNotEqual",
    name: "ErrorInputNotEqual",
    description:
        "Clase que representa un error de entrada que no es igual al valor esperado en la biblioteca Fenextjs.",
    props: [
        {
            id: "code",
            type: "ErrorCode",
            required: true,
            default: "ErrorCode.INPUT_NOT_EQUAL",
            description:
                "Código de error específico que indica que la entrada no es igual al valor esperado.",
        },
        {
            id: "message",
            type: "string",
            required: true,
            default: '"Not Equal Input"',
            description:
                "Mensaje de error que describe la naturaleza del error cuando la entrada no es igual al valor esperado. Si se proporciona un valor específico con el cual se espera la igualdad, el mensaje lo incluirá.",
        },
        {
            id: "input",
            type: "string",
            required: false,
            description:
                "Texto opcional que proporciona información sobre la entrada que causó el error.",
        },
        {
            id: "equal",
            type: "any",
            required: false,
            description:
                "Valor opcional que especifica el valor con el cual se esperaba que la entrada fuera igual.",
        },
    ],
};
