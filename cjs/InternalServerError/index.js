"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInternalServerError = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorInternalServerError extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.INTERNAL_SERVER_ERROR,
            message: "Internal Server Error",
        });
    }
}
exports.ErrorInternalServerError = ErrorInternalServerError;
//# sourceMappingURL=index.js.map