import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';
import { Request, Response } from 'express';
import { genarateErrorSchema } from './error/index';

@Middleware({type: 'after'})
export class ErrorHandler implements ExpressErrorMiddlewareInterface {
  error(err:any, request:Request, response:Response, next:(err:any) => any) {
    response.send(genarateErrorSchema(err));
  }
}