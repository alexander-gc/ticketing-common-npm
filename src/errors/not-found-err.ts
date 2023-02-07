import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  reason: string = "Not Found";
  statusCode: number = 404;

  constructor() {
    super("Route not found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
