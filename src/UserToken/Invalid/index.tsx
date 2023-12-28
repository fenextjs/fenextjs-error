import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorUserTokenInvalid extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.USER_TOKEN_INVALID,
            message: "Invalid Token",
        });
    }
}
