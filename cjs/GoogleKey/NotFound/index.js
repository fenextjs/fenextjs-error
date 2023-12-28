"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorGoogleKeyNotFound = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorGoogleKeyNotFound extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.GOOGLE_KEY_NOT_FOUND,
            message: "Google Key not Found",
        });
    }
}
exports.ErrorGoogleKeyNotFound = ErrorGoogleKeyNotFound;
//# sourceMappingURL=index.js.map