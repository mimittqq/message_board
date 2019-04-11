import { Get, JsonController, Res } from 'routing-controllers';
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
}