import { Injectable } from '@nestjs/common';
import { Routes } from './routing/routes.contants';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
