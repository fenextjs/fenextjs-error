import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorForbidden extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.FORBIDDEN,
            message: "Forbidden",
        });
    }
}
