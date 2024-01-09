import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorInputValueTooHigh extends ErrorFenextjs {
    constructor(d?: { input?: string; max?: number | Date; message?: string }) {
        super({
            code: ErrorCode.INPUT_VALUE_TOO_HIGH,
            message:
                d?.message ??
                `Input Value Too High${d?.max ? `, max: ${d?.max}` : ""}`,
            input: d?.input,
        });
    }
}
