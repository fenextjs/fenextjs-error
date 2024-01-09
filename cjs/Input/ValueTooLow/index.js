"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInputValueTooLow = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorInputValueTooLow extends Fenextjs_1.ErrorFenextjs {
    constructor(d) {
        super({
            code: Error_1.ErrorCode.INPUT_VALUE_TOO_LOW,
            message: d?.message ??
                `Input Value Too Low${d?.min ? `, min: ${d?.min}` : ""}`,
            input: d?.input,
        });
    }
}
exports.ErrorInputValueTooLow = ErrorInputValueTooLow;
//# sourceMappingURL=index.js.map