"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInputValueTooHigh = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorInputValueTooHigh extends Fenextjs_1.ErrorFenextjs {
    constructor(d) {
        super({
            code: Error_1.ErrorCode.INPUT_VALUE_TOO_HIGH,
            message: `Input Value Too High${d?.max ? `, max: ${d?.max}` : ""}`,
            input: d?.input,
        });
    }
}
exports.ErrorInputValueTooHigh = ErrorInputValueTooHigh;
//# sourceMappingURL=index.js.map