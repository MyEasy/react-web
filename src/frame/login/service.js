import axios from '../../utils/request';

export async function postUserLogin(body) {
  const data = await axios({
    method: 'post',
    url: '/gateway/user/login',
    data: body,
  });
  return data;
};

export async function postTest(body) {
  const data = await axios({
    method: 'post',
    url: '/gateway/user/test',
    data: body
  })
}