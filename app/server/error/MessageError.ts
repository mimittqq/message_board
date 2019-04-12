export const message_error_map = {
  1000: 'ip长度不符合要求',
  1001: '昵称长度不符合要求',
  1002: '内容长度不符合要求',
}

export class MessageError extends Error {
  constructor(error_code:string) {
    super(error_code);
  }
}