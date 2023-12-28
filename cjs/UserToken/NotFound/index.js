"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUserTokenNotFound = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorUserTokenNotFound extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.USER_TOKEN_NOT_FOUND,
            message: "Token not Found",
        });
    }
}
exports.ErrorUserTokenNotFound = ErrorUserTokenNotFound;
//# sourceMappingURL=index.js.map