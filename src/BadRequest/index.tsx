import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorBadRequest extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.BAD_REQUEST,
            message: "Bad Request",
        });
    }
}
