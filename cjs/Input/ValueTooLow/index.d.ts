import { ErrorFenextjs } from "../../Fenextjs";
export declare class ErrorInputValueTooLow extends ErrorFenextjs {
    constructor(d?: {
        input?: string;
        min?: number | Date;
    });
}
