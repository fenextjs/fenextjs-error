import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorGoogleKeyInvalid extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.GOOGLE_KEY_INVALID,
            message: "Invalid Google Key",
        });
    }
}
