import React, { useEffect, useState } from 'react';
import * as authAPI from '../../lib/api/auth';
import { useCookies } from 'react-cookie';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DemodayViewer = () => {
  const [demoday, setdemoday] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();
  const params = useParams();
  const jsonUser = localStorage.getItem('user');
  const user = JSON.parse(jsonUser);
  console.log('viewer localstorage user:', user);

  // Path Variable 값 가져오기
  useEffect(() => {
    fetchData();
    console.log('fklsjdaf', cookies.access_token);
  }, []);

  const fetchData = async () => {
    const request = await authAPI
      .demodayOne(cookies.access_token, params['demodayId'])
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
      .joinDemoday(cookies.access_token, params['demodayId'])
      .then((r) => {
        console.log(r.data.data);
        alert(
          '데모 신청이 완료 되었습니다.\n데모 날짜가 다가오면 단톡방이 만들어 집니다. 대기해 주세요!'
        );
        navigate('/demoday');
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert('토큰이 만료되었습니다.');
          localStorage.removeItem('user');
          navigate('/login');
        } else if (error.response.status === 400) {
          alert('모집 마감된 데모데이입니다!');
          navigate('/demoday');
        }
      });
  };

  const endRegistrationDate = (stringDate) => {
    // XXXX-XX-XX
    let date = new Date(stringDate);

    date.setDate(date.getDate() - 1);

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return '' + year + '-' + month + '-' + day;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const formattedDate = date
      .toLocaleDateString('ko-KR', {
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/. /g, '.')
      .slice(0, -1);

    const weekDay = date.toLocaleDateString('ko-KR', { weekday: 'short' });

    return `${formattedDate} (${weekDay})`;
  };

  return demoday ? (
    <div className="demodayInfo">
      <h1>데모 이름: {demoday.title}</h1>
      <img
        src={demoday.demoday_image_url}
        alt="demoday_image_url"
        className="profile_image"
        style={{
          width: '400px',
          height: 'auto',
          objectFit: 'cover',
          aspectRatio: '16/9',
        }}
      ></img>
      <p>설명: {demoday.description}</p>
      <div className="demo_table">
        <div className="row">
          신청 기간: {formatDate(demoday.created_at.substring(0, 10))} ~{' '}
          {formatDate(endRegistrationDate(demoday.event_date))}
        </div>
        <div className="row">
          모임 날짜: {formatDate(demoday.event_date.substring(0, 10))}
        </div>
        <div className="row">만남 시각: {demoday.meeting_time.slice(0, 5)}</div>
        <div className="row">모임 정원: {demoday.total_capacity}명</div>
        <div className="row">모임 장소: {demoday.location}</div>
      </div>
      <br />
      {/* 
        분기 기준
        1. 내가 만든 데모데이일 경우 현재 모집현황을 볼 수 있게 함.
        2. 타인의 데모데이일 경우 신청했는지 여부 판단, 신청시 신청완료 텍스트 가시화
        3. 인원이 꽉 찼을 경우, 신청 마감 텍스트 가시화
        4. 참여 가능할 경우 신청하기 버튼 활성화
      */}
      {demoday.user_id === user.userId ? (
        <div>
          모집 현황: {demoday.current_capacity} / {demoday.total_capacity}
        </div>
      ) : demoday.is_application === '1' ? (
        <div>신청완료</div>
      ) : demoday.current_capacity === demoday.total_capacity ? (
        <div className="apply_end">신청 마감!!!</div>
      ) : (
        <div className="apply_btn">
          <button onClick={onClickApplyBtn}>신청하기</button>
        </div>
      )}
    </div>
  ) : (
    <div className="empty"></div>
  );
};

export default DemodayViewer;

function DemoDayImage({ demoday }) {
  const isFull = demoday.current_capacity === demoday.total_capacity;

  const imageStyle = {
    width: '200px',
    height: 'auto',
    objectFit: 'cover',
    aspectRatio: '16/9',
    filter: isFull ? 'brightness(50%)' : 'none', // 밝기를 낮추기 위한 조건부 스타일링
  };

  return (
    <div style={{ position: 'relative', width: '200px', height: 'auto' }}>
      <img
        src={demoday.demoday_image_url}
        alt="demoday_image_url"
        className="profile_image"
        style={imageStyle}
      />
      {isFull && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          마감
        </div>
      )}
    </div>
  );
}
