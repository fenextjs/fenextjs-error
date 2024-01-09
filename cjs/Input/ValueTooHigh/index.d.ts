import { ErrorFenextjs } from "../../Fenextjs";
export declare class ErrorInputValueTooHigh extends ErrorFenextjs {
    constructor(d?: {
        input?: string;
        max?: number | Date;
        message?: string;
    });
}
