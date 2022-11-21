import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessage(): string {
    return 'am the messsage';
  }
}
