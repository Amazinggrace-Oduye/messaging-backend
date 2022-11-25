import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CreatemessageDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException(`message with id: ${id} does not exist`);
    }
    return message;
  }
  @Post()
  createMessage(@Body() body: CreatemessageDto) {
    return this.messagesService.create(body.content);
  }
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }
}
