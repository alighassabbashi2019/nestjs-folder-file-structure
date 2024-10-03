import { HttpStatus } from '@nestjs/common';
import { BaseHttpException } from './base-http.exception';

export class BadRequestException extends BaseHttpException {
  constructor(message: string | object = 'Bad request', errorCode: string = 'BAD_REQUEST') {
    super(message, HttpStatus.BAD_REQUEST, errorCode);
  }
}