"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorDatabaseError = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorDatabaseError extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.DATABASE_ERROR,
            message: "Database Error",
        });
    }
}
exports.ErrorDatabaseError = ErrorDatabaseError;
//# sourceMappingURL=index.js.map