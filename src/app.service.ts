import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greet(): string {
    return 'Hello saumya';
  }

  greetWithName(name: string): string {
    return `Hello ${name}`;
  }
}
