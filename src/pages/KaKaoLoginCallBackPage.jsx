import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { check } from '../modules/user';
import { login } from '../modules/auth';

/**
 * 카카오 auth 서버와 유저간의 인증 -> 리다이렉트 page에서 처리
 *
 * TO DO
 * 1. token 만료시 logic
 */
//

const KaKaoLoginCallBackPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  const { auth, authError, user } = useSelector(({ auth, user }) => ({
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const handleCookie = (access_token) => {
    const expireDate = new Date();
    expireDate.setMinutes(expireDate.getMinutes() + 60 * 24 * 30); // 일주일 유지 쿠키
    setCookie('access_token', access_token, {
      path: '/',
      expires: expireDate,
    });
  };

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    // const redirectUri = process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI;
    // const GRANT_TYPE = 'authorization_code';
    // const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;

    /**
     * redirect_url: 인가코드 검증용 프론트엔드에서 사용한 redirect_uri
     * code: 카카오 서버로 부터 받은 인가코드
     */

    dispatch(login({ code }));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      alert('인증 오류! 다시 로그인 해주세요.');
      navigate('/login');
      return;
    }
    if (auth) {
      handleCookie(auth.accessToken);
      console.log(auth.accessToken);
      dispatch(check({ access_token: auth.accessToken }));
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log(e);
      }

      navigate('/');
    }
  }, [navigate, user]);

  return <></>;
};

export default KaKaoLoginCallBackPage;
