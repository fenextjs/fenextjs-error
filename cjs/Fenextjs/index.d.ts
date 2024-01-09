import { ErrorCode, ErrorProps } from "fenextjs-interface/cjs/Error";
export interface ErrorFenextjsProps<D> extends ErrorProps<D> {
    input?: string;
}
export declare class ErrorFenextjs<D = any> extends Error {
    code: ErrorCode;
    message: string;
    msg: string;
    input?: string;
    data?: D;
    constructor({ code, data, message, input }: ErrorFenextjsProps<D>);
}
