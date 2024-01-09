import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorInputTooShort extends ErrorFenextjs {
    constructor(d?: { input?: string; min?: number | Date; message?: string }) {
        super({
            code: ErrorCode.INPUT_TOO_SHORT,
            message:
                d?.message ??
                `Input Too Short${d?.min ? `, min: ${d?.min}` : ""}`,
            input: d?.input,
        });
    }
}
