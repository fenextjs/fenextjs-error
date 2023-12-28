import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorTooManyRequests extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.TOO_MANY_REQUESTS,
            message: "Too Many Requests",
        });
    }
}
