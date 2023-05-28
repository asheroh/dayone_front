import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import * as authAPI from '../../lib/api/auth';

const MyInfoViewer = () => {
  const [info, setInfo] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const printWeek = (week) => {
    // 요일을 표현하는 문자열 배열
    const days = ['월', '화', '수', '목', '금', '토', '일'];

    let result = '';

    for (let i = 0; i < week.length; i++) {
      // week 배열의 요소가 0이 아니면 'O', 아니면 'X'
      const mark = week[i] !== 0 ? 'O' : 'X';
      result += ` ${days[i]}:${mark} `;
    }

    return result.trim();
  };

  const fetchData = async () => {
    const request = await authAPI
      .myInfo(cookies.access_token)
      .then((r) => {
        setInfo(r.data.data);
        console.log(r.data.data);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };
  return info ? (
    <div>
      <div style={{ display: 'flex' }}>
        <img
          src={info.user_profile_img}
          alt="user image_url"
          className="profile_image"
        ></img>
        <span>
          {info.username} 총 {info.total_count}번의 기록을 하셨어요!
        </span>
        <span style={{ marginLeft: '100px' }}>
          <Link to="/postform">
            {' '}
            <button>기록하기</button>
          </Link>
        </span>
      </div>
      <br />
      <div>이번주 기록 | {printWeek(info.week)}</div>
    </div>
  ) : (
    <div className="empty"></div>
  );
};

export default MyInfoViewer;
