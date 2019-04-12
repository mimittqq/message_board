import { Repository, getRepository } from "typeorm";
import { Message } from '../entities/Message.entity';
import { Service as Injectable } from 'typedi';
import { MessageCreateType } from './message_repo';

@Injectable()
export class MessageRepository {
  repository:Repository<Message>
  constructor() {
    this.repository = getRepository(Message);
  }
  create(message:MessageCreateType) : Promise<Message> {
    return this.repository.save(message);
  }
  getMessages() : Promise<Message[]> {
    return this.repository.createQueryBuilder('message')
      .select(`*, UNIX_TIMESTAMP(create_time) as create_time,
        UNIX_TIMESTAMP(update_time) as update_time`)
      .getRawMany();
  }
}