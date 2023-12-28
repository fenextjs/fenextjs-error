"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorServerError = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorServerError extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.SERVER_ERROR,
            message: "Internal Server Error",
        });
    }
}
exports.ErrorServerError = ErrorServerError;
//# sourceMappingURL=index.js.map