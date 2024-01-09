import { ErrorCode, ErrorProps } from "fenextjs-interface/cjs/Error";

export interface ErrorFenextjsProps<D> extends ErrorProps<D> {
    input?: string;
}

export class ErrorFenextjs<D = any> extends Error {
    code: ErrorCode;
    message: string;
    msg: string;
    input?: string;
    data?: D;

    constructor({ code, data, message, input }: ErrorFenextjsProps<D>) {
        super(message);
        this.code = code ?? ErrorCode.ERROR;
        this.name = code ?? ErrorCode.ERROR;
        this.message = (message ?? "") + (input ? ` [${input}]` : "");
        this.msg = message ?? "";
        this.data = data;
        this.input = input;
    }
}
