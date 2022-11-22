import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { CreatemessageDto } from './dtos/create-messages.dto';

@Controller('messages')
export class MessagesController {
  @Get('/:id')
  getMessage(@Param('id', ParseIntPipe) id: number, @Query() query: string) {
    return `am the messsage with id:${id} and query:${query}`;
  }
  @Post()
  createMessage(@Body() body: CreatemessageDto) {
    return `${body}`;
  }
  @Get()
  listMessages(): string[] {
    return ['hello', 'you'];
  }
}
