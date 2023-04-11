import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { check } from '../../modules/user';
import { login } from '../../modules/auth';

/**
 * 카카오 auth 서버와 유저간의 인증 -> 리다이렉트 page에서 처리
 *
 * TO DO
 * 1. token 만료시 logic
 */
//

const KaKaoCallBack = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { auth, authError, user } = useSelector(({ auth, user }) => ({
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

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
    axios
      .get(`https://api.dayone.kr/api/v1/auth/login?code=${code}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        // const { data } = res;
        // const { access_token } = data;
        // if (access_token) {
        // }
      });

    // const code = 'n24ehneb7f5j9gi';

    // dispatch(login({ code }));
  }, [dispatch]);

  // useEffect(() => {
  //   if (authError) {
  //     console.log('오류발생');
  //     console.log(authError);
  //     alert('인증 오류! 다시 로그인 해주세요.');
  //     navigate('/login');
  //     return;
  //   }
  //   if (auth) {
  //     console.log('로그인 성공');
  //     dispatch(check());
  //   }
  // }, [auth, authError, dispatch]);

  // useEffect(() => {
  //   if (user) {
  //     navigate('/');
  //     try {
  //       localStorage.setItem('user', JSON.stringify(user));
  //     } catch (e) {
  //       console.log('로컬 스토리지가 작동하지 않습니다.');
  //     }
  //   }
  // }, [navigate, user]);

  return <></>;
};

export default KaKaoCallBack;
