import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorInputPatternMismatch extends ErrorFenextjs {
    constructor(d?: { input?: string }) {
        super({
            code: ErrorCode.INPUT_PATTERN_MISMATCH,
            message: "Input Pattern Mismatch",
            input: d?.input,
        });
    }
}
