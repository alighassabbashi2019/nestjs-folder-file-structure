import { NotFoundException } from "src/common/exceptions/not-found-exception";

export class AdminNotFoundException extends NotFoundException {
  constructor(message?: string | Record<string, string>) {
    super(message || 'Admin not found')
  }
}