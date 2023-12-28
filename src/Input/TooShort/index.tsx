import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorInputTooShort extends ErrorFenextjs {
    constructor(d?: { input?: string; min?: number | Date }) {
        super({
            code: ErrorCode.INPUT_TOO_SHORT,
            message: `Input Too Short${d?.min ? `, min: ${d?.min}` : ""}`,
            input: d?.input,
        });
    }
}
