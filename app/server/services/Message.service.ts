import { Inject, Service } from 'typedi';
import { MessageRepository } from '../db/repositories/Message.repo';
import { MessageCreateType } from '../db/repositories/message_repo';

@Service()
export class MessageService {
  @Inject()
  private repository!:MessageRepository;
  getAll() {
    return this.repository.getMessages();
  }
  add(message:MessageCreateType) {
    return this.repository.create(message);
  }
}