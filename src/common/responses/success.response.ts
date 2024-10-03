import { BaseSuccessResponse } from "./base-success.response";

export class successResponse extends BaseSuccessResponse<null> {
  constructor(message: string = 'Operation completed successfully') {
    super(200, message, null);
  }
}