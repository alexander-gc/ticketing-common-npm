// This is like an interface/type
export abstract class CustomError extends Error {
  abstract statusCode: number;
  reason: string | undefined; // reason!: string; <- optional

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
