import { Inject, Service } from 'typedi';
import { MessageRepository } from '../db/repositories/Message.repo';

@Service()
export class MessageService {
  @Inject()
  private repository!:MessageRepository;
  getAll() {
    return this.repository.getMessages();
  }
  add(ip:string) {
     
  }
}