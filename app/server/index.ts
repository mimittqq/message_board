import { createConnection } from "typeorm";
import orm_config from './config/orm.config';
import { App } from './app';

(async () => {
  try {
    await createConnection(orm_config);
    console.log(`success connecting to the database`);
    new App(3000).listen();
  } catch(err) {
    console.log(`Error while connecting to the database, ${err}`);
    return err;
  }
})();