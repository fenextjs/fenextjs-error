"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorNotAcceptable = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorNotAcceptable extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.NOT_ACCEPTABLE,
            message: "Not Acceptable",
        });
    }
}
exports.ErrorNotAcceptable = ErrorNotAcceptable;
//# sourceMappingURL=index.js.map