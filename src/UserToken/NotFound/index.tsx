import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorUserTokenNotFound extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.USER_TOKEN_NOT_FOUND,
            message: "Token not Found",
        });
    }
}
