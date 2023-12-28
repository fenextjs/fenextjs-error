import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorInternalServerError extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.INTERNAL_SERVER_ERROR,
            message: "Internal Server Error",
        });
    }
}
