import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KaKaoCallBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const CODE = params.get('code');
    const GRANT_TYPE = 'authorization_code';
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URI}&code=${CODE}`,
        {},
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        const { access_token } = data;
        if (access_token) {
          console.log(access_token);
          axios
            .post(
              'http://ec2-52-79-40-57.ap-northeast-2.compute.amazonaws.com:3001/api/v1/auth/login',
              {
                body: JSON.stringify({
                  access_token,
                }),
              },
              {
                headers: { 'Content-Type': 'application/json' },
              }
            )
            .then((res) => {
              //성준이가 보낸 데이터 출력 확인
              console.log(res);
            });
        }
        // 액세스 토큰 받아오는 것까지 오케이
        // 이 이후 성준이가 만든 백엔드에 토큰을 날려주고 세션처리해서 값을 던지면 나는 로그인 완료만 처리하면 된다!
        // 전역 변수로써 쓸 스토리지가 있어야함.
        // -> 리덕스 공부? 고려
      });
  }, []);

  return <></>;
};

export default KaKaoCallBack;
