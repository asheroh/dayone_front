import React from 'react';

const LoginTest = () => {
  const loginWithKakao = () => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <div>
      <div>LoginTest!</div>
      <div>
        <img
          src="img/kakao_login_btn_img_2.png"
          alt="kakao_login"
          onClick={() => loginWithKakao()}
        />
      </div>
    </div>
  );
};

export default LoginTest;
