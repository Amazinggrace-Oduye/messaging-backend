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
  MessagesService: MessagesService;
  constructor() {
    this.MessagesService = new MessagesService();
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.MessagesService.findOne(id);
    if (!message) {
      throw new NotFoundException(`message with id: ${id} does not exist`);
    }
    return message;
  }
  @Post()
  createMessage(@Body() body: CreatemessageDto) {
    return this.MessagesService.create(body.content);
  }
  @Get()
  listMessages() {
    return this.MessagesService.findAll();
  }
}
