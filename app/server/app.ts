import express from 'express';
import 'reflect-metadata';
import { useExpressServer, useContainer as routingUseContainer } from 'routing-controllers';
import { Application } from 'express-serve-static-core';
import Container from 'typedi';

export class App {
  app:Application;
  port:number;
  constructor(port:number) {
    this.app = express();
    this.port = port;
    this.initDI();
    this.initRouters();
  }
  initDI() {
    routingUseContainer(Container);
  }
  initRouters() {
    useExpressServer(this.app, {
      routePrefix: '/api',
      controllers: [
        `${__dirname}/controllers/**/*.js`,
      ]
    })
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`server run at ${this.port}`);
    })
  }
}