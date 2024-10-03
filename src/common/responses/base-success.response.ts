export class BaseSuccessResponse<T> {
  constructor(
    public statusCode: number = 200,
    public message: string = 'Success',
    public data: T,
    public timestamp: string = new Date().toISOString()
  ) {}
}