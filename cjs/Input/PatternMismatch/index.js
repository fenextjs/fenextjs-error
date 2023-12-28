"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInputPatternMismatch = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorInputPatternMismatch extends Fenextjs_1.ErrorFenextjs {
    constructor(d) {
        super({
            code: Error_1.ErrorCode.INPUT_PATTERN_MISMATCH,
            message: "Input Pattern Mismatch",
            input: d?.input,
        });
    }
}
exports.ErrorInputPatternMismatch = ErrorInputPatternMismatch;
//# sourceMappingURL=index.js.map