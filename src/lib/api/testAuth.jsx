import testClient from './testClient';

// login
// code를 인가코드지만 임시로 id로 테스트!
export const login = ({ code }) =>
  testClient.get(`/api/collections/usertest/records/${code}`);

// login status check
// code를 인가코드지만 임시로 id로 테스트!
export const check = () =>
  testClient.get(`/api/collections/usertest/records/godd2gf96eqrdxs`);

// logout
// code를 인가코드지만 임시로 id로 테스트!
export const logout = () =>
  testClient.get(`/api/collections/usertest/records/godd2gf96eqrdxs`);
