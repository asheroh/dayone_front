import React, { useEffect } from 'react';
import * as authAPI from '../../lib/api/auth';
import styled from 'styled-components';

const KakaoButton = styled.button`
  width: 300px;
  height: 48px;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  font-size: 16px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor};
  cursor: pointer;
`;

const AuthKakaoLoginForm = () => {
  useEffect(() => {
    authAPI.healthCheck().catch((e) => {
      alert('서버가 실행 중이 아닙니다.');
    });
  }, []);

  const loginWithKakao = () => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <KakaoButton onClick={() => loginWithKakao()}>
      카카오로 시작하기
    </KakaoButton>
  );
};

export default AuthKakaoLoginForm;
