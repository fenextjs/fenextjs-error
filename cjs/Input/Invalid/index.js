"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInputInvalid = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorInputInvalid extends Fenextjs_1.ErrorFenextjs {
    constructor(d) {
        super({
            code: Error_1.ErrorCode.INPUT_INVALID,
            message: "Invalid Input",
            input: d?.input,
        });
    }
}
exports.ErrorInputInvalid = ErrorInputInvalid;
//# sourceMappingURL=index.js.map