"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorPageNotFound = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorPageNotFound extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.PAGE_NOT_FOUND,
            message: "Page not Found",
        });
    }
}
exports.ErrorPageNotFound = ErrorPageNotFound;
//# sourceMappingURL=index.js.map