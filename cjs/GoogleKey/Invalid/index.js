"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorGoogleKeyInvalid = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
const Fenextjs_1 = require("../../Fenextjs");
class ErrorGoogleKeyInvalid extends Fenextjs_1.ErrorFenextjs {
    constructor() {
        super({
            code: Error_1.ErrorCode.GOOGLE_KEY_INVALID,
            message: "Invalid Google Key",
        });
    }
}
exports.ErrorGoogleKeyInvalid = ErrorGoogleKeyInvalid;
//# sourceMappingURL=index.js.map