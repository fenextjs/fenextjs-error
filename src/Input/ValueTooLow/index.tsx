import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorInputValueTooLow extends ErrorFenextjs {
    constructor(d?: { input?: string; min?: number | Date }) {
        super({
            code: ErrorCode.INPUT_VALUE_TOO_LOW,
            message: `Input Value Too Low${d?.min ? `, min: ${d?.min}` : ""}`,
            input: d?.input,
        });
    }
}
