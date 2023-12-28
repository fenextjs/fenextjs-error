import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorServiceUnavailable extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.SERVICE_UNAVAILABLE,
            message: "Service Unavailable",
        });
    }
}
