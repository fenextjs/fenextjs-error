import { ErrorFenextjs } from "../../Fenextjs";
export declare class ErrorInputTooLong extends ErrorFenextjs {
    constructor(d?: {
        input?: string;
        max?: number | Date;
        message?: string;
    });
}
