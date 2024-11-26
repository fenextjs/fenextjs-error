import { ErrorCode, ErrorProps } from "fenextjs-interface/cjs/Error";
export interface ErrorFenextjsProps<D> extends ErrorProps<D> {
    input?: string;
}
export declare class ErrorFenextjs<D = any> extends Error {
    code: ErrorCode;
    content?: any;
    message: string;
    msg?: string;
    input?: string;
    data?: D;
    constructor({ code, data, message, input, content, }: ErrorFenextjsProps<D>);
}
