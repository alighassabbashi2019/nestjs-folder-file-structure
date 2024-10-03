import { BaseSuccessResponse } from "./base-success.response";

export class MultipleResponse<T> extends BaseSuccessResponse<T[]> {
  public totalCount: number;
  public page?: number;
  public pageSize?: number;
  public totalPages?: number;

  constructor(
    data: T[],
    totalCount: number,
    message: string = 'Resources fetched successfully',
    page?: number,
    pageSize?: number
  ) {
    super(200, message, data);
    this.totalCount = totalCount;

    if (page && pageSize) {
      this.page = page;
      this.pageSize = pageSize;
      this.totalPages = Math.ceil(totalCount / pageSize);
    }
  }
}