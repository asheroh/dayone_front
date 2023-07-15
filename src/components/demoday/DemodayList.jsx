import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import * as authAPI from '../../lib/api/auth';
import { useNavigate, Link } from 'react-router-dom';
import {
  DemoTrailerBody,
  DemoTrailerBox,
  DemoTrailerItem,
  DemoTrailerThumbnail,
  DemodayHeadText,
  DemodaySubText,
  ShadowScreen,
  TrailerPubDate,
  TrailerTitle,
} from '../DemodayStyle';

const DemodayList = () => {
  const navigate = useNavigate();
  const [demodays, setDemodays] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await authAPI
      .demoday(cookies.access_token)
      .then((r) => {
        setDemodays(r.data.data);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  return (
    <>
      <DemodayHeadText>데이원 모임 번개 DAY</DemodayHeadText>
      <DemodaySubText>서로에 대해 더 알아가며 함께 성장하자!</DemodaySubText>
      <DemoTrailerBox>
        {demodays.map((demoday) => {
          return (
            <Link
              to={`/demoday/${demoday.demoday_id}`}
              key={demoday.demoday_id}
              state={{ demoday: demoday }}
            >
              <DemodayItem demoday={demoday} />
            </Link>
          );
        })}
      </DemoTrailerBox>
    </>
  );
};

export default DemodayList;

const DemodayItem = ({ demoday }) => {
  const isFull = demoday.current_capacity === demoday.total_capacity;
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const formattedDate = date
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/. /g, '.')
      .slice(0, -1);

    const weekDay = date.toLocaleDateString('ko-KR', { weekday: 'short' });

    return `${formattedDate} (${weekDay})`;
  };
  return (
    <DemoTrailerItem>
      <DemoTrailerThumbnail
        src={demoday.demoday_image_url}
        alt="demoday_image_url"
        className="profile_image"
        isFull={isFull}
      />
      {isFull && <ShadowScreen>마감</ShadowScreen>}
      <DemoTrailerBody>
        <TrailerPubDate>{formatDate(demoday.event_date)}</TrailerPubDate>
        <TrailerTitle>{demoday.title}</TrailerTitle>
      </DemoTrailerBody>
      {/* <div style={{ position: 'relative', width: '200px', height: 'auto' }}>
        <img
          src={demoday.demoday_image_url}
          alt="demoday_image_url"
          className="profile_image"
          style={{
            width: '200px',
            height: 'auto',
            objectFit: 'cover',
            aspectRatio: '16/9',
            filter: isFull ? 'brightness(50%)' : 'none', // 밝기를 낮추기 위한 조건부 스타일링
          }}
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
    
      <h3>데모명: {demoday.title}</h3>
      <p>일시: {formatDate(demoday.event_date)}</p>
       */}
    </DemoTrailerItem>
  );
};
