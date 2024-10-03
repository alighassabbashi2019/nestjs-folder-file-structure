import { HttpStatus } from '@nestjs/common';
import { BaseHttpException } from './base-http.exception';

export class NotFoundException extends BaseHttpException {
  constructor(message: string | object = 'Resource not found', errorCode: string = 'NOT_FOUND') {
    super(message, HttpStatus.NOT_FOUND, errorCode);
  }
}