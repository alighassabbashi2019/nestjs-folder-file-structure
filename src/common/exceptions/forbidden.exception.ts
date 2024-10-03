import { HttpStatus } from '@nestjs/common';
import { BaseHttpException } from './base-http.exception';

export class ForbiddenException extends BaseHttpException {
  constructor(message: string | object = 'Access forbidden', errorCode: string = 'FORBIDDEN') {
    super(message, HttpStatus.FORBIDDEN, errorCode);
  }
}