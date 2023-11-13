import { HttpCode } from "./HttpCode";
import HttpError from "./HttpError";

export function HttpBadRequest(message: string) {
    return new HttpError(HttpCode.BAD_REQUEST, message);
};
export function HttpForbidden (message: string) {
    return new HttpError(HttpCode.FORBIDDEN, message);
};
export function HttpNotFound (message: string) {
    return new HttpError(HttpCode.NOT_FOUND, message);
};
export function HttpInternalServerError (message: string) {
    return new HttpError(HttpCode.INTERNAL_SERVER_ERROR, message);
};

