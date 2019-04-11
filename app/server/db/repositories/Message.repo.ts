import { Repository, getRepository } from "typeorm";
import { Message } from '../entities/Message.entity';
import { Service as Injectable } from 'typedi';

@Injectable()
export class MessageRepository {
  repository:Repository<Message>
  constructor() {
    this.repository = getRepository(Message);
  }
  create(message:Message) : Promise<Message> {
    return this.repository.save(message);
  }
  getMessages() : Promise<Message[]> {
    return this.repository.find();
  }
}