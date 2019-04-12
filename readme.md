buiding...

- [x] 完成基于 typescript, typeorm, routing-controller, express, typedi 的基本框架
- [x] 加入 jest 进行单元测试
- [ ] 设计后端抛错处理逻辑, 要求
>1. 输出到客户端时为以下格式:
>```
>  {
>    "code": "Message_1101",
>    "message": "用户名长度不符合要求"
>  }
>  ```
>2. 使用时为 throw new MessageError('1101')格式, 便于查看
>3. 操作数据库时发生的错误为 DbError
- [ ] 完成接口文档上的接口
- [ ] 使用 react 建立客户端