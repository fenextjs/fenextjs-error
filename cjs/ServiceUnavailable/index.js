"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorServiceUnavailable = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorServiceUnavailable extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.SERVICE_UNAVAILABLE,
            message: "Service Unavailable",
        });
    }
}
exports.ErrorServiceUnavailable = ErrorServiceUnavailable;
//# sourceMappingURL=index.js.map