import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { ErrorFenextjs } from "../Fenextjs";

export class ErrorFileNotFound extends ErrorFenextjs {
    constructor() {
        super({
            code: ErrorCode.FILE_NOT_FOUND,
            message: "File not Found",
        });
    }
}
