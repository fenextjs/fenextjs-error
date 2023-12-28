"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInputNotEqual = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorInputNotEqual extends Fenextjs_1.ErrorFenextjs {
    constructor(d) {
        super({
            code: Error_1.ErrorCode.INPUT_NOT_EQUAL,
            message: `Not Equal Input${d?.equal ? `, equal: ${JSON.stringify([d?.equal].flat(2))}` : ""}`,
            input: d?.input,
        });
    }
}
exports.ErrorInputNotEqual = ErrorInputNotEqual;
//# sourceMappingURL=index.js.map