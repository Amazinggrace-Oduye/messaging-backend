import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messageRepo: MessagesRepository;
  constructor() {
    // this is service creating its own dependency
    this.messageRepo = new MessagesRepository();
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
