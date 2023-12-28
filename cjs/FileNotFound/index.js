"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFileNotFound = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../Fenextjs");
class ErrorFileNotFound extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.FILE_NOT_FOUND,
            message: "File not Found",
        });
    }
}
exports.ErrorFileNotFound = ErrorFileNotFound;
//# sourceMappingURL=index.js.map