import { EntityRepository, AbstractRepository, Repository, getRepository } from "typeorm";
import { Message } from '../../../db/entities/Message.entity';

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