import React, { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import * as authAPI from '../../lib/api/auth';
import { useNavigate, Link } from 'react-router-dom';
import {
  BoxIcon,
  DemoEmptyBox,
  DemoSwiperSlide,
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
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper/modules';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

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
        {demodays.length === 0 ? (
          <DemoEmptyBox>
            ...
            <BoxIcon icon={faBoxOpen} />
          </DemoEmptyBox>
        ) : (
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            style={{ overflow: demodays.length === 0 ? 'visible' : '' }}
          >
            {demodays.map((demoday) => {
              return (
                <DemoSwiperSlide
                  key={demoday.demoday_id}
                  length={demodays.length}
                >
                  <Link
                    to={`/demoday/${demoday.demoday_id}`}
                    state={{ demoday: demoday }}
                  >
                    <DemodayItem demoday={demoday} />
                  </Link>
                </DemoSwiperSlide>
              );
            })}
          </Swiper>
        )}
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
    </DemoTrailerItem>
  );
};
