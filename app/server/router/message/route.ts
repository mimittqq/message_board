import Router from 'koa-router';
import { MessageRepository } from '../../controller/message/service/Message.service';

export const message_router = new Router({
  prefix: '/message',
});

message_router.get('/', async (ctx, next) => {
  const message_repo = new MessageRepository();
  try {
    const data = await message_repo.getMessages();
    ctx.body = data;
  } catch (err) {
    console.log(err);
    ctx.status = 403;
  }
})

