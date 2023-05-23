import React, { useEffect } from 'react';
import * as authAPI from '../../lib/api/auth';
import styled from 'styled-components';

/**
 * 로그인 페이지 폼
 */
const AuthFormBlock = styled.div`
  // flex로 내부 중앙정렬
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthForm = () => {
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
    <AuthFormBlock>
      <img
        src="img/kakao_login_btn_img.png"
        alt="kakao_login"
        onClick={() => loginWithKakao()}
      />
    </AuthFormBlock>
  );
};

export default AuthForm;
