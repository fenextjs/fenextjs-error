import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorInputInvalid extends ErrorFenextjs {
    constructor(d?: { input?: string; message?: string }) {
        super({
            code: ErrorCode.INPUT_INVALID,
            message: d?.message ?? "Invalid Input",
            input: d?.input,
        });
    }
}
