import { ErrorFenextjs } from "../../Fenextjs";
export declare class ErrorInputLength extends ErrorFenextjs {
    constructor(d?: {
        input?: string;
        length?: number | Date;
        message?: string;
    });
}
