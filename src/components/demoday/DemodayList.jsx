import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import * as authAPI from '../../lib/api/auth';
import { useNavigate, Link } from 'react-router-dom';

const DemodayList = () => {
  const navigate = useNavigate();
  const [demoday, setDemoday] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  const handleClick = () => {};

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await authAPI
      .demoday(cookies.access_token)
      .then((r) => {
        setDemoday(r.data.data);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };
  return (
    <div>
      <h1>데이원 모임 번개 DAY</h1>
      <br />
      <h2>서로에 대해 더 알아가며 함께 성장하자!</h2>
      <br />
      {demoday.map((demodayItem) => {
        return (
          <div
            key={demodayItem.demoday_id}
            onClick={() => handleClick(demodayItem)}
          >
            <DemodayItem demodayItem={demodayItem} />
          </div>
        );
      })}
    </div>
  );
};

export default DemodayList;

const DemodayItem = ({ demodayItem }) => {
  return (
    <Link to={`/demoday/${demodayItem.demoday_id}`}>
      <img
        src={demodayItem.demoday_image_url}
        alt="demoday_image_url"
        className="profile_image"
        style={{
          width: '200px',
          height: 'auto',
          objectFit: 'cover',
          aspectRatio: '16/9',
        }}
      ></img>
      <h3>데모명: {demodayItem.title}</h3>
      <p>일시: {formatDate(demodayItem.event_date)}</p>
      <br />
    </Link>
  );
};

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
