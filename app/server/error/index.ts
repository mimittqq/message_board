import { message_error_map } from './MessageError';

export const error_map:{ [key:string]:string } = {
  uncaught: '未知错误',
};

const error_type_dictionary = [{
  type: 'M',
  error: message_error_map,
}];

error_type_dictionary.forEach((item) => {
  Object.entries(item.error).forEach((error_pair) => {
    const [error_code, error_tips] = error_pair;
    error_map[`${item.type}_${error_code}`] = error_tips;
  })
});

export function genarateErrorSchema(error_code:string) {
  return {
    code: error_code,
    desc: error_map[error_code],
  };
}