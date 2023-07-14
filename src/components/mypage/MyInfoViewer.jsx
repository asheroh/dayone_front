import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import * as authAPI from '../../lib/api/auth';
import {
  MypageHeaderSection,
  MypageProfileBox,
  MypageRecordBox,
  ProfileImage,
  ProfileLeftBox,
  ProfileMiddleBox,
  ProfileName,
  ProfileRightBox,
  ProfileState,
  RecordBox,
  RecordCheckBox,
  RecordDaily,
  RecordText,
} from '../MypageStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';

const MyInfoViewer = () => {
  const [info, setInfo] = useState(null);
  const [currentDay, setCurrentDay] = useState(new Date().getDay());
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await authAPI
      .myInfo(cookies.access_token)
      .then((r) => {
        setInfo(r.data.data);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  return info ? (
    <MypageHeaderSection>
      <MypageProfileBox>
        <ProfileLeftBox>
          <ProfileImage
            src={info.user_profile_img}
            alt="profile_image"
            loading="lazy"
          />
          <ProfileMiddleBox>
            <ProfileName>{info.username}</ProfileName>
            <ProfileState>
              총 {info.total_count}번의 기록을 하셨어요!
            </ProfileState>
          </ProfileMiddleBox>
        </ProfileLeftBox>
        <ProfileRightBox>
          <FontAwesomeIcon
            icon={faPenClip}
            onClick={() => navigate('/postform')}
          />
        </ProfileRightBox>
      </MypageProfileBox>
      <MypageRecordBox>
        <RecordText>
          이번 주<br />
          기록
        </RecordText>
        <RecordBox>
          <RecordDaily today={1 - currentDay}>
            월
            <RecordCheckBox check={info.week[0]} today={1 - currentDay} />
          </RecordDaily>
          <RecordDaily today={2 - currentDay}>
            화
            <RecordCheckBox check={info.week[1]} today={2 - currentDay} />
          </RecordDaily>
          <RecordDaily today={3 - currentDay}>
            수
            <RecordCheckBox check={info.week[2]} today={3 - currentDay} />
          </RecordDaily>
          <RecordDaily today={4 - currentDay}>
            목
            <RecordCheckBox check={info.week[3]} today={4 - currentDay} />
          </RecordDaily>
          <RecordDaily today={5 - currentDay}>
            금
            <RecordCheckBox check={info.week[4]} today={5 - currentDay} />
          </RecordDaily>
          <RecordDaily today={6 - currentDay}>
            토
            <RecordCheckBox check={info.week[5]} today={6 - currentDay} />
          </RecordDaily>
          <RecordDaily today={7 - currentDay}>
            일
            <RecordCheckBox check={info.week[6]} today={7 - currentDay} />
          </RecordDaily>
        </RecordBox>
      </MypageRecordBox>
    </MypageHeaderSection>
  ) : (
    ''
  );
};

export default MyInfoViewer;
