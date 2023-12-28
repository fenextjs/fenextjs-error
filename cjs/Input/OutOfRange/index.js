"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInputOutOfRange = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorInputOutOfRange extends Fenextjs_1.ErrorFenextjs {
    constructor(d) {
        super({
            code: Error_1.ErrorCode.INPUT_OUT_OF_RANGE,
            message: `Input Out of Range${d?.range ? `, range: ${JSON.stringify(d?.range)}` : ""}`,
            input: d?.input,
        });
    }
}
exports.ErrorInputOutOfRange = ErrorInputOutOfRange;
//# sourceMappingURL=index.js.map