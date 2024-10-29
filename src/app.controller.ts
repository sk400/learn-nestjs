import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  greet(): string {
    return this.appService.greet();
  }

  @Post('hello/:name')
  greetWithName(name: string): string {
    return this.appService.greetWithName(name);
  }
}
