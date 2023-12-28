import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorInputOutOfRange extends ErrorFenextjs {
    constructor(d?: { input?: string; range?: number[] }) {
        super({
            code: ErrorCode.INPUT_OUT_OF_RANGE,
            message: `Input Out of Range${
                d?.range ? `, range: ${JSON.stringify(d?.range)}` : ""
            }`,
            input: d?.input,
        });
    }
}
