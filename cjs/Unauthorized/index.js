"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUnauthorized = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorUnauthorized extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.UNAUTHORIZED,
            message: "Unauthorized",
        });
    }
}
exports.ErrorUnauthorized = ErrorUnauthorized;
//# sourceMappingURL=index.js.map