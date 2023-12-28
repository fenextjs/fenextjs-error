"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInputTooShort = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorInputTooShort extends Fenextjs_1.ErrorFenextjs {
    constructor(d) {
        super({
            code: Error_1.ErrorCode.INPUT_TOO_SHORT,
            message: `Input Too Short${d?.min ? `, min: ${d?.min}` : ""}`,
            input: d?.input,
        });
    }
}
exports.ErrorInputTooShort = ErrorInputTooShort;
//# sourceMappingURL=index.js.map