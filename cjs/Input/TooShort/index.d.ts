import { ErrorFenextjs } from "../../Fenextjs";
export declare class ErrorInputTooShort extends ErrorFenextjs {
    constructor(d?: {
        input?: string;
        min?: number | Date;
        message?: string;
    });
}
