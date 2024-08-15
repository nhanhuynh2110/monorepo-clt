import { HttpStatus } from '@nestjs/common';

export class ErrorException extends Error {
  public statusCode: number;
  constructor(public message: string) {
    super(message);
    this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
