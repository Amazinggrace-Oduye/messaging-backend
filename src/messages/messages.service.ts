import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class MessagesService {
  constructor(public messageRepo: MessagesRepository) {
    // this is service using dependency injection
  }

  findAll() {
    return this.messageRepo.findAll();
  }
  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  create(content: string) {
    return this.messageRepo.create(content);
  }
}
