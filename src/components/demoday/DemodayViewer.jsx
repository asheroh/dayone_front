import React, { useEffect, useState } from 'react';
import * as authAPI from '../../lib/api/auth';
import { useCookies } from 'react-cookie';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  DemoDetailBody,
  DemoDetailFooterSection,
  DemoDetailHeadText,
  DemoDetailHeaderSection,
  DemoDetailKey,
  DemoDetailKeyBox,
  DemoDetailSubText,
  DemoDetailThumbnail,
  DemoDetailValue,
  DemoDetailValueBox,
  DemoSignUpButton,
} from '../DemodayStyle';
import { DayRecordButtonLine } from '../DayRecordStyle';

const DemodayViewer = () => {
  const [demoday, setdemoday] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();
  const params = useParams();
  const jsonUser = localStorage.getItem('user');
  const user = JSON.parse(jsonUser);
  // console.log('viewer localstorage user:', user);

  // Path Variable 값 가져오기
  useEffect(() => {
    fetchData();
    // console.log('fklsjdaf', cookies.access_token);
  }, []);

  const fetchData = async () => {
    const request = await authAPI
      .demodayOne(cookies.access_token, params['demodayId'])
      .then((r) => {
        setdemoday(r.data.data[0]);
        // console.log(r.data.data[0]);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  const onClickApplyBtn = async () => {
    // console.log('데모데이', cookies.access_token);
    const request = await authAPI
      .joinDemoday(cookies.access_token, params['demodayId'])
      .then((r) => {
        // console.log(r.data.data);
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
    <DemoDetailBody>
      <DemoDetailHeaderSection>
        <DemoDetailHeadText>{demoday.title}</DemoDetailHeadText>
        <DemoDetailThumbnail
          src={demoday.demoday_image_url}
          alt="demoday_image_thumbnail"
          loading="lazy"
        />
        <DemoDetailSubText>{demoday.description}</DemoDetailSubText>
      </DemoDetailHeaderSection>
      <DemoDetailFooterSection>
        <DemoDetailKeyBox>
          <DemoDetailKey>
            신청 기간
            <br />
            모임 날짜
            <br />
            만남 시간
            <br />
            모임 정원
            <br />
            모임 장소
          </DemoDetailKey>
        </DemoDetailKeyBox>
        <DemoDetailValueBox>
          <DemoDetailValue>
            {formatDate(demoday.created_at.substring(0, 10))} ~{' '}
            {formatDate(endRegistrationDate(demoday.event_date))}
            <br />
            {formatDate(demoday.event_date.substring(0, 10))}
            <br />
            {demoday.meeting_time.slice(0, 5)}
            <br />
            {demoday.total_capacity}명
            <br />
            {demoday.location}
          </DemoDetailValue>
        </DemoDetailValueBox>
        {/* 
        분기 기준
        1. 내가 만든 데모데이일 경우 현재 모집현황을 볼 수 있게 함.
        2. 타인의 데모데이일 경우 신청했는지 여부 판단, 신청시 신청완료 텍스트 가시화
        3. 인원이 꽉 찼을 경우, 신청 마감 텍스트 가시화
        4. 참여 가능할 경우 신청하기 버튼 활성화
      */}
        {demoday.user_id === user.userId ? (
          <DemoSignUpButton>
            모집 현황: {demoday.current_capacity} / {demoday.total_capacity}
          </DemoSignUpButton>
        ) : demoday.is_application === '1' ? (
          <DemoSignUpButton>신청 완료</DemoSignUpButton>
        ) : demoday.current_capacity === demoday.total_capacity ? (
          <DemoSignUpButton>신청 마감</DemoSignUpButton>
        ) : (
          <DemoSignUpButton onClick={onClickApplyBtn}>
            신청하기
          </DemoSignUpButton>
        )}
      </DemoDetailFooterSection>
      <DayRecordButtonLine />
    </DemoDetailBody>
  ) : (
    ''
  );
};

export default DemodayViewer;
