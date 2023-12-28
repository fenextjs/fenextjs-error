"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorForbidden = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorForbidden extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.FORBIDDEN,
            message: "Forbidden",
        });
    }
}
exports.ErrorForbidden = ErrorForbidden;
//# sourceMappingURL=index.js.map