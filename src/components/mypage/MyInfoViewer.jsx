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
          <RecordDaily>
            월
            <RecordCheckBox />
          </RecordDaily>
          <RecordDaily>
            화
            <RecordCheckBox />
          </RecordDaily>
          <RecordDaily>
            수
            <RecordCheckBox />
          </RecordDaily>
          <RecordDaily>
            목
            <RecordCheckBox />
          </RecordDaily>
          <RecordDaily>
            금
            <RecordCheckBox />
          </RecordDaily>
          <RecordDaily>
            토
            <RecordCheckBox />
          </RecordDaily>
          <RecordDaily>
            일
            <RecordCheckBox />
          </RecordDaily>
        </RecordBox>
        {/* <div>{printWeek(info.week)}</div> */}
      </MypageRecordBox>
    </MypageHeaderSection>
  ) : (
    ''
  );
};

export default MyInfoViewer;
