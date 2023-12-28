"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorNetworkError = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorNetworkError extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.NETWORK_ERROR,
            message: "Network Error",
        });
    }
}
exports.ErrorNetworkError = ErrorNetworkError;
//# sourceMappingURL=index.js.map