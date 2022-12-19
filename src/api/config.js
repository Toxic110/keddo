import axios from 'axios';

// export const fetching = (url, method, body, headers = {}) =>
//   fetch(url, {
//     method: method,
//     mode: 'cors',
//     body: body,
//     headers: {
//       headers
//     }
//   })
//     .then(async response => await response.json())
//     .then(async json => await json);

// export const getAuthToken = (login, password) =>
//   fetching(
//     'https://lapi.keddo.ru/v1/login',
//     'POST',
//     JSON.stringify({login: login, password: password})
//   ).then(result => result.token);

// export const fetchingTwo = (url, method, headers = {}) =>
//   fetch(url, {
//     method: method,
//     mode: 'cors',
//     headers: {
//       Authorization:
// eslint-disable-next-line max-len
//         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjE4Nzc1NDgsIm5iZiI6MTYyMTg3NzU0OCwidHlwZSI6ImFjY2VzcyJ9.dkBPKMPlG2vzyj7Padgv4D8m1K-3hcUaRyTLl4xVcjk'
//     }
//   })
//     .then(async response => await response.json())
//     .then(async json => await json);

// export const instance = {
//   baseURL: 'https://lapi.keddo.ru',
//   headers: {
//     Authorization:
// eslint-disable-next-line max-len
//       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjE4Nzc1NDgsIm5iZiI6MTYyMTg3NzU0OCwidHlwZSI6ImFjY2VzcyJ9.dkBPKMPlG2vzyj7Padgv4D8m1K-3hcUaRyTLl4xVcjk'
//   }
// };

// export const testApi = () => {
// eslint-disable-next-line max-len
//   fetchingTwo(`${instance.baseURL}/v1/ucu?id=1`, 'GET', `${instance.headers.Authorization}`).then(
//     res => res
//   );
// };

// console.log(instance);

// console.log(testApi());

export const instance = axios.create({
  baseURL: 'https://api.keddo.ru:444',
  mode: 'cors',
  headers: {
    Authorization:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjE2MTc5ODYsIm5iZiI6MTYyMTYxNzk4NiwidHlwZSI6ImFjY2VzcyJ9.kHQaruEB68GhmJ9tTz-ATfasMZy2k5IAA9OgRU44EgE',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': 'true'
  }
});

export const getAuthToken = (login, password) => {
  console.log(123);
  instance
    .post('/v1/login', {
      login: login,
      password: password
    })
    .then(res => {
      console.log(res);
    });
};

export const testApi = () => {
  instance.get('/v1/ucu?id=1').then(res => {
    console.log(res);
  });
};

console.log(testApi());
