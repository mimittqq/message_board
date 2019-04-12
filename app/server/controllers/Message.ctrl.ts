import { Get, JsonController, Post, Req, Body, Res } from 'routing-controllers';
import { Inject } from 'typedi';
import { MessageService } from '../services/Message.service';
import { Request, Response } from 'express';
import { MessageCreateType } from '../db/repositories/message_repo';
import { Omit } from '../../utils/def/common';

@JsonController('/message')
export class MessageController {
  @Inject()
  private messageService!:MessageService;

  @Get('s')
  async getAllMessage() {
    try {
      return this.messageService.getAll();
    } catch (err) {
      throw new Error(err);
    }
  }
  @Post()
  async addMessage(
    @Req() request:Request,
    @Body() message:Omit<MessageCreateType, 'ip'>,
    @Res() response:Response) {
    await this.messageService.add({
      ip: request.ip,
      content: message.content,
      nickname: message.nickname,
    });
    return response.sendStatus(204);
  }
}