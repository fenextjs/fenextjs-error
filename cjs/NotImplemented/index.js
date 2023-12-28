"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorNotImplemented = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorNotImplemented extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.NOT_IMPLEMENTED,
            message: "Not Implemented",
        });
    }
}
exports.ErrorNotImplemented = ErrorNotImplemented;
//# sourceMappingURL=index.js.map