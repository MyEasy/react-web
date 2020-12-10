import axios from 'axios';

export async function postUserLogin (body) {
  const data = await axios({
    method: 'post',
    url: '/gateway/user/login',
    data: body,
  });
  return data;
}