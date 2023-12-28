"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUserTokenInvalid = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorUserTokenInvalid extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.USER_TOKEN_INVALID,
            message: "Invalid Token",
        });
    }
}
exports.ErrorUserTokenInvalid = ErrorUserTokenInvalid;
//# sourceMappingURL=index.js.map