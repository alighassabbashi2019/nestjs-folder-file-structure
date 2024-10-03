import { BaseSuccessResponse } from './base-success.response';

export class SingleResponse<T> extends BaseSuccessResponse<T> {
  constructor(data: T, message: string = 'Resource fetched successfully') {
    super(200, message, data);
  }
}