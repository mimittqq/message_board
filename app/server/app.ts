import Koa from 'koa';
import Router from 'koa-router';
import 'reflect-metadata';
import { message_router } from './router/message/route';

export class App {
  app: Koa;
  port:number;
  constructor(port:number) {
    this.app = new Koa();
    this.port = port;
    this.init();
  }
  init() {
    // this.app.use((ctx) => {
    //   ctx.body = 'hello koa';
    // });
    this.app.use(message_router.routes());
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`server run at ${this.port}`);
    })
  }
}

// const app = new Koa();

// app.use((ctx) => {
//   ctx.body = 'hello koa';
// })

// app.listen(3000);