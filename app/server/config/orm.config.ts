import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import MysqlConfig from './mysql.local.json';

if (!MysqlConfig) {
  throw new Error('请先配置好 mysql.local.json')
}

const orm_config:MysqlConnectionOptions = Object.assign({
  type: 'mysql',
  entities: [
    __dirname + '/../db/entities/*.entity.js',
  ]
}, MysqlConfig);

export default orm_config