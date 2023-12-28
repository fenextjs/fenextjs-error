import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorUnauthorized extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.UNAUTHORIZED,
            message: "Unauthorized",
        });
    }
}
