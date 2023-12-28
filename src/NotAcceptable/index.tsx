import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorNotAcceptable extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.NOT_ACCEPTABLE,
            message: "Not Acceptable",
        });
    }
}
