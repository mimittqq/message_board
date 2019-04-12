import { Message } from '../entities/Message.entity';
export type MessageCreateType = Pick<Message, 'content'|'ip'|'nickname'>;