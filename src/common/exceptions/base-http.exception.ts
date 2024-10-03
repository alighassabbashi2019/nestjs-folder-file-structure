import { HttpException, HttpStatus } from '@nestjs/common';

export class BaseHttpException extends HttpException {
  constructor(
    message: string | object,
    statusCode: HttpStatus = HttpStatus.BAD_REQUEST,
    errorCode?: string
  ) {
    const response = {
      message: typeof message === 'string' ? message : (message as object),
      errorCode: errorCode ?? 'UNKNOWN_ERROR',
      timestamp: new Date().toISOString(),
    };
    super(response, statusCode);
  }
}