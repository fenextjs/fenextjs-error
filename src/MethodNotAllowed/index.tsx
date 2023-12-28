import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorMethodNotAllowed extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.METHOD_NOT_ALLOWED,
            message: "Method Not Allowed",
        });
    }
}
