import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorException } from './exceptions/ErrorException';

@Catch(HttpException, ErrorException)
export class FilterExceptions implements ExceptionFilter {
  catch(exception: HttpException | ErrorException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    let exceptionResponse: string | object;

    let status: number;
    let message: string;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
      exceptionResponse = exception.getResponse();
    } else if (exception instanceof ErrorException) {
      status = exception.statusCode;
      message = exception.message;
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Internal server error';
    }

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
      exceptionResponse,
    });
  }
}
