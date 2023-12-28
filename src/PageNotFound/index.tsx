import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorPageNotFound extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.PAGE_NOT_FOUND,
            message: "Page not Found",
        });
    }
}
