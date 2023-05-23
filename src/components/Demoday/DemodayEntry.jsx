import React, { useEffect, useState } from 'react';
import * as authAPI from '../../lib/api/auth';
import { useCookies } from 'react-cookie';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DemodayOne = () => {
  const [demoday, setdemoday] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  const demodayId = useParams();
  // Path Variable 값 가져오기
  useEffect(() => {
    fetchData();
    console.log('fklsjdaf', cookies.access_token);
  }, []);

  const fetchData = async () => {
    const request = await authAPI
      .demodayOne(cookies.access_token, demodayId['demodayId'])
      .then((r) => {
        setdemoday(r.data.data[0]);
        console.log(r.data.data[0]);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  const onClickApplyBtn = async () => {
    console.log('데모데이', cookies.access_token);
    const request = await authAPI
      .joinDemoday(cookies.access_token, demodayId['demodayId'])
      .then((r) => {
        console.log(r.data.data);
        alert(
          '데모 신청이 완료 되었습니다.\n데모 날짜가 다가오면 단톡방이 만들어 집니다. 대기해 주세요!'
        );
        navigate('/demoday');
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  return demoday ? (
    <div className="demodayInfo">
      <h1>데모 이름: {demoday.title}</h1>
      <img
        src={demoday.demoday_image_url}
        alt="demoday_image_url"
        className="profile_image"
        style={{
          width: '200px',
          height: 'auto',
          objectFit: 'cover',
          aspectRatio: '16/9',
        }}
      ></img>
      <p>설명: {demoday.description}</p>
      <div className="demo_table">
        <div className="row">
          신청 기간: {demoday.start_registeration_date.substring(0, 10)} ~{' '}
          {demoday.end_registration_date.substring(0, 10)}
        </div>
        <div className="row">
          모임 날짜: {demoday.event_date.substring(0, 10)}
        </div>
        <div className="row">만남 시각: {demoday.meeting_time}</div>
        <div className="row">모임 정원: {demoday.total_capacity}</div>
        <div className="row">모임 장소: {demoday.location}</div>
      </div>

      {/* 백엔드 업데이트되면 다시 ㄱㄱ */}
      {/* {demoday.isApplication ? (
        <div className="apply_btn">
          <button onClick={onClickApplyBtn}>신청취소</button>
        </div>
      ) : (
        <div className="apply_btn">
          <button onClick={onClickApplyBtn}>신청하기</button>
        </div>
      )} */}

      <div className="apply_btn">
        <button onClick={onClickApplyBtn}>신청하기</button>
      </div>
    </div>
  ) : (
    <div className="empty"></div>
  );
};

export default DemodayOne;
