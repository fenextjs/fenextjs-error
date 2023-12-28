"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMethodNotAllowed = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorMethodNotAllowed extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.METHOD_NOT_ALLOWED,
            message: "Method Not Allowed",
        });
    }
}
exports.ErrorMethodNotAllowed = ErrorMethodNotAllowed;
//# sourceMappingURL=index.js.map