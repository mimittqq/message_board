import { Get, JsonController, Res, Post, Req } from 'routing-controllers';
import { Inject } from 'typedi';
import { MessageService } from '../services/Message.service';
import { Request, Response } from 'express';

@JsonController('/message')
export class MessageController {
  @Inject()
  private messageService!:MessageService;

  @Get('s')
  getAllMessage() {
    return this.messageService.getAll();
  }
  @Post()
  addMessage(@Req() request:Request) {
    return this.messageService.add(request.ip);
  }
}