"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBadRequest = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorBadRequest extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.BAD_REQUEST,
            message: "Bad Request",
        });
    }
}
exports.ErrorBadRequest = ErrorBadRequest;
//# sourceMappingURL=index.js.map