import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorDatabaseError extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.DATABASE_ERROR,
            message: "Database Error",
        });
    }
}
