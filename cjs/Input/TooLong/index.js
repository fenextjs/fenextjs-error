"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInputTooLong = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorInputTooLong extends Fenextjs_1.ErrorFenextjs {
    constructor(d) {
        super({
            code: Error_1.ErrorCode.INPUT_TOO_LONG,
            message: `Input Too Long${d?.max ? `, max: ${d?.max}` : ""}`,
            input: d?.input,
        });
    }
}
exports.ErrorInputTooLong = ErrorInputTooLong;
//# sourceMappingURL=index.js.map