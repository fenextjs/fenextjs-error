import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorInputTooLong extends ErrorFenextjs {
    constructor(d?: { input?: string; max?: number | Date; message?: string }) {
        super({
            code: ErrorCode.INPUT_TOO_LONG,
            message:
                d?.message ??
                `Input Too Long${d?.max ? `, max: ${d?.max}` : ""}`,
            input: d?.input,
        });
    }
}
