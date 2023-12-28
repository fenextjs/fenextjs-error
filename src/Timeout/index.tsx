import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorTimeout extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.TIMEOUT,
            message: "Request Timeout",
        });
    }
}
