import { CustomError } from "./CustomError";

export class NotAuthrizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super("Not Authrized");

    Object.setPrototypeOf(this, NotAuthrizedError.prototype);
  }

  serializeErrors() {
    return [{ message: "Not Authrized" }];
  }
}
