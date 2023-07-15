import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import * as authAPI from '../../lib/api/auth';
import { PostDetailHeader } from '../MypageStyle';
import {
  PostBackButton,
  PostDeleteButton,
  PostDetailOwner,
} from '../DayRecordStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const DemodayHeader = ({ demoday }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const jsonUser = localStorage.getItem('user');
  const user = JSON.parse(jsonUser);
  // console.log('demoday header user:', user);
  // console.log('demoday header demoday:', demoday);

  const onClickDeleteBtn = async () => {
    const request = await authAPI
      .deleteDemoday(cookies.access_token, params['demodayId'])
      .then((r) => {
        // console.log('deletePost return data:', r.data);
        if (r.status >= 200 && r.status < 300) {
          alert('데모데이를 삭제했습니다!');
          navigate(-1);
        }
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  return (
    <PostDetailHeader>
      <PostBackButton onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </PostBackButton>
      <PostDetailOwner>데모 상세</PostDetailOwner>
      {/* 데모데이 유저와 현재 유저의 id가 같고 신청한 사람이 없을 때 삭제 가능 */}
      {demoday?.user_id === user.userId && demoday?.current_capacity === '1' ? (
        <PostDeleteButton
          onClick={() => {
            onClickDeleteBtn();
          }}
        >
          삭제
        </PostDeleteButton>
      ) : (
        ''
      )}
    </PostDetailHeader>
  );
};

export default DemodayHeader;
