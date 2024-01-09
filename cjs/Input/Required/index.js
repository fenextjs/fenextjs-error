"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInputRequired = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorInputRequired extends Fenextjs_1.ErrorFenextjs {
    constructor(d) {
        super({
            code: Error_1.ErrorCode.INPUT_REQUIRED,
            message: d?.message ?? "Input Required",
            input: d?.input,
        });
    }
}
exports.ErrorInputRequired = ErrorInputRequired;
//# sourceMappingURL=index.js.map