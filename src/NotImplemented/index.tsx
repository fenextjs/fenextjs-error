import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorNotImplemented extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.NOT_IMPLEMENTED,
            message: "Not Implemented",
        });
    }
}
