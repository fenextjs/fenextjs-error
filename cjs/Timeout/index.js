"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorTimeout = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorTimeout extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.TIMEOUT,
            message: "Request Timeout",
        });
    }
}
exports.ErrorTimeout = ErrorTimeout;
//# sourceMappingURL=index.js.map