import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorRequestTimeout extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.REQUEST_TIMEOUT,
            message: "Request Timeout",
        });
    }
}
