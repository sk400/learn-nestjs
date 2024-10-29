/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greet(): string {
    return 'Hello saumya';
  }
}
