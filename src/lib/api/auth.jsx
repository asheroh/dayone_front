import client from './client';

// 로그인
export const login = ({ code }) => client.get(`/v1/auth/login?code=${code}`);

// login
// export const login = ({ code, redirectUri }) => {
//   client.post('/api/v1/auth/login', { code, redirectUri });
// };

// 유저 체크
export const check = ({ access_token }) => {
  return client.get('/v1/auth/check', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 로그아웃
export const logout = () => client.get('/v1/auth/logout');
// client.get(`/api/v1/auth/login?code=${code}`);

// 전체 기록조회
export const allPost = (access_token) => {
  console.log('auth api', access_token);
  return client.get('/v1/posts', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 베스트 기록조회
export const bestPost = (access_token) => {
  return client.get('/v1/posts/best', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 기록 추가
export const addPost = (access_token, PostData) => {
  return client.post('/v1/posts', PostData, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 책 조회
export const searchBook = (search, access_token) => {
  console.log('auth api', access_token);
  return client.get(
    `/v1/posts/search/book?query=${search}&display=10&start=1`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};

// 전체 데모데이 조회
export const demoday = (access_token) => {
  return client.get('/v1/demodays', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
