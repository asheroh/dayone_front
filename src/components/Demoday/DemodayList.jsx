import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import * as authAPI from '../../lib/api/auth';
import { useNavigate } from 'react-router-dom';

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
          <div onClick={() => handleClick(demodayItem)}>
            <DemodayItem
              key={demodayItem.demoday_id}
              demodayItem={demodayItem}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DemodayList;

// "demoday_id": "2",
// "title": "강동구 데모",
// "location": "강일역",
// "demoday_image_url": "https://example.com/image.jpg",
// "event_date": "2023-05-03T15:00:00.000Z",
// "meeting_time": "13:00:00",
// "total_capacity": "2",
// "current_capacity": "1"
const DemodayItem = ({ demodayItem }) => {
  return (
    <div>
      <img
        src={demodayItem.demoday_image_url}
        alt="demoday_image_url"
        className="profile_image"
      ></img>
      <h3>데모명: {demodayItem.title}</h3>
      <p>일시: {demodayItem.event_date}</p>

      <br />
    </div>
  );
};
