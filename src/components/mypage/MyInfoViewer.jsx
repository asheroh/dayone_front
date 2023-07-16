import React, { useContext, useEffect, useState } from 'react';
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
import { SignButton } from '../HomeStyle';
import { useDispatch } from 'react-redux';
import { logout } from '../../modules/user';
import { Context } from '../../context/Context';

const MyInfoViewer = () => {
  const [info, setInfo] = useState(null);
  const [currentDay, setCurrentDay] = useState(new Date().getDay());
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const { themeMode } = useContext(Context);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    if (window.confirm('정말 로그아웃하시겠습니까?')) {
      dispatch(logout());
      navigate('/login', { replace: true });
    } else {
      return;
    }
  };

  useEffect(() => {
    fetchData();
    if (currentDay === 0) {
      setCurrentDay(7);
    }
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
            style={{
              objectFit: 'cover',
            }}
          />
          <ProfileMiddleBox>
            <ProfileName>{info.username}</ProfileName>
            <ProfileState themeMode={themeMode}>
              총 {info.total_count}번의 기록을 하셨어요!
            </ProfileState>
          </ProfileMiddleBox>
        </ProfileLeftBox>
        <ProfileRightBox>
          <FontAwesomeIcon
            icon={faPenClip}
            onClick={() => navigate('/postform')}
          />
          <SignButton onClick={onLogout}>로그아웃</SignButton>
        </ProfileRightBox>
      </MypageProfileBox>
      <MypageRecordBox>
        <RecordText>
          이번 주<br />
          기록
        </RecordText>
        <RecordBox>
          <RecordDaily today={1 - currentDay} themeMode={themeMode}>
            월
            <RecordCheckBox
              check={info.week[0]}
              today={1 - currentDay}
              themeMode={themeMode}
            />
          </RecordDaily>
          <RecordDaily today={2 - currentDay} themeMode={themeMode}>
            화
            <RecordCheckBox
              check={info.week[1]}
              today={2 - currentDay}
              themeMode={themeMode}
            />
          </RecordDaily>
          <RecordDaily today={3 - currentDay} themeMode={themeMode}>
            수
            <RecordCheckBox
              check={info.week[2]}
              today={3 - currentDay}
              themeMode={themeMode}
            />
          </RecordDaily>
          <RecordDaily today={4 - currentDay} themeMode={themeMode}>
            목
            <RecordCheckBox
              check={info.week[3]}
              today={4 - currentDay}
              themeMode={themeMode}
            />
          </RecordDaily>
          <RecordDaily today={5 - currentDay} themeMode={themeMode}>
            금
            <RecordCheckBox
              check={info.week[4]}
              today={5 - currentDay}
              themeMode={themeMode}
            />
          </RecordDaily>
          <RecordDaily today={6 - currentDay} themeMode={themeMode}>
            토
            <RecordCheckBox
              check={info.week[5]}
              today={6 - currentDay}
              themeMode={themeMode}
            />
          </RecordDaily>
          <RecordDaily today={7 - currentDay} themeMode={themeMode}>
            일
            <RecordCheckBox
              check={info.week[6]}
              today={7 - currentDay}
              themeMode={themeMode}
            />
          </RecordDaily>
        </RecordBox>
      </MypageRecordBox>
    </MypageHeaderSection>
  ) : (
    ''
  );
};

export default MyInfoViewer;
