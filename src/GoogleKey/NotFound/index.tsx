import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../../Fenextjs";

export class ErrorGoogleKeyNotFound extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.GOOGLE_KEY_NOT_FOUND,
            message: "Google Key not Found",
        });
    }
}
