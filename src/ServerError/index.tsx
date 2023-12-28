import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorServerError extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.SERVER_ERROR,
            message: "Internal Server Error",
        });
    }
}
