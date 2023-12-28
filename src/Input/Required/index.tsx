import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorInputRequired extends ErrorFenextjs {
    constructor(d?: { input?: string }) {
        super({
            code: ErrorCode.INPUT_REQUIRED,
            message: "Input Required",
            input: d?.input,
        });
    }
}
