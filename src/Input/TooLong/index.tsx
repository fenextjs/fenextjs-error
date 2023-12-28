import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorInputTooLong extends ErrorFenextjs {
    constructor(d?: { input?: string; max?: number | Date }) {
        super({
            code: ErrorCode.INPUT_TOO_LONG,
            message: `Input Too Long${d?.max ? `, max: ${d?.max}` : ""}`,
            input: d?.input,
        });
    }
}
