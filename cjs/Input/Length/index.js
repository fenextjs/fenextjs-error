"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInputLength = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorInputLength extends Fenextjs_1.ErrorFenextjs {
    constructor(d) {
        super({
            code: Error_1.ErrorCode.INPUT_LENGTH,
            message: `Input not length${d?.length ? `, length: ${d?.length}` : ""}`,
            input: d?.input,
        });
    }
}
exports.ErrorInputLength = ErrorInputLength;
//# sourceMappingURL=index.js.map