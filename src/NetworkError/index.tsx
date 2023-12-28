import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorNetworkError extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.NETWORK_ERROR,
            message: "Network Error",
        });
    }
}
