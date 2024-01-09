import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorInputNotEqual extends ErrorFenextjs {
    constructor(d?: { input?: string; equal?: any; message?: string }) {
        super({
            code: ErrorCode.INPUT_NOT_EQUAL,
            message:
                d?.message ??
                `Not Equal Input${
                    d?.equal
                        ? `, equal: ${JSON.stringify([d?.equal].flat(2))}`
                        : ""
                }`,
            input: d?.input,
        });
    }
}
