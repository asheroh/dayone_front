import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { check } from '../../modules/user';
import { login } from '../../modules/auth';
import client from '../../lib/api/client';

/**
 * 카카오 auth 서버와 유저간의 인증 -> 리다이렉트 page에서 처리
 *
 * TO DO
 * 1. token 만료시 logic
 */
//

const KaKaoCallBack = ({ setIsLoggedIn }) => {
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

    console.log(code);
    dispatch(login({ code }));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류발생');
      console.log(authError);
      alert('인증 오류! 다시 로그인 해주세요.');
      navigate('/login');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
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
        console.log('로컬 스토리지가 작동하지 않습니다.');
      }
      console.log('kakao call back user ok3');
      setIsLoggedIn(true);
      navigate('/');
      console.log('kakao call back user ok4');
    }
  }, [navigate, user]);

  return <></>;
};

export default KaKaoCallBack;
