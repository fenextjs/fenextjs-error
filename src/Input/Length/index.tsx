import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorInputLength extends ErrorFenextjs {
    constructor(d?: { input?: string; length?: number | Date }) {
        super({
            code: ErrorCode.INPUT_LENGTH,
            message: `Input not length${
                d?.length ? `, length: ${d?.length}` : ""
            }`,
            input: d?.input,
        });
    }
}
