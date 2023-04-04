import client from './client';

// login
export const login = ({ code }) => {
  client.get(`/api/v1/auth/login?code=${code}`);
};

// login
// export const login = ({ code, redirectUri }) => {
//   client.post('/api/v1/auth/login', { code, redirectUri });
// };

// login status check
export const check = () => client.get('/api/v1/auth/check');
