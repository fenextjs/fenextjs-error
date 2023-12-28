"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorRequestTimeout = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorRequestTimeout extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.REQUEST_TIMEOUT,
            message: "Request Timeout",
        });
    }
}
exports.ErrorRequestTimeout = ErrorRequestTimeout;
//# sourceMappingURL=index.js.map