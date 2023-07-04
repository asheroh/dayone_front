import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Responsive from '../common/Responsive';
import * as authAPI from '../../lib/api/auth';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: black;
  color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; // 자식 엘리먼트 사이의 여백을 최대로 설정

  .left {
    margin-right: auto;
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .center {
    margin-left: auto;
    margin-right: auto;
    font-size: 1.125rem;
    font-weight: 800;
  }

  .right {
    margin-left: auto;
    font-size: 1.125rem;
    font-weight: 800;
    cursor: pointer;
  }
`;

/**
 * 헤더가 fixed로 되ㅣ어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

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
    <HeaderBlock>
      <Wrapper>
        <div
          className="left"
          onClick={() => {
            navigate(-1);
          }}
        >
          {'<'}
        </div>
        <div className="center">데모상세</div>
        {/* 데모데이 유저와 현재 유저의 id가 같고 신청한 사람이 없을 때 삭제 가능 */}
        {demoday?.user_id === user.userId &&
        demoday.current_capacity === '1' ? (
          <div
            className="right"
            onClick={() => {
              onClickDeleteBtn();
            }}
          >
            삭제
          </div>
        ) : (
          <div className="right"></div>
        )}
      </Wrapper>
      <Spacer />
    </HeaderBlock>
  );
};

export default DemodayHeader;
