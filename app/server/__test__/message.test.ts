import axios from 'axios';

describe('test message api', () => {
  const common_secret = new Date().getTime();
  test('create new message', async () => {
    const params = {
      content: `我永远喜欢空银子+${common_secret}`,
      nickname: `网友${common_secret}`.substring(0, 10),
    };
    const res = await axios.post('http://localhost:3000/api/message', params);
    console.log(res);
    
    expect(res.status).toBe(204);
  })
})