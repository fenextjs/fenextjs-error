"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorTooManyRequests = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorTooManyRequests extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.TOO_MANY_REQUESTS,
            message: "Too Many Requests",
        });
    }
}
exports.ErrorTooManyRequests = ErrorTooManyRequests;
//# sourceMappingURL=index.js.map