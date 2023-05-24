import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';

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
  }
`;

/**
 * 헤더가 fixed로 되ㅣ어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height = 4rem;
`;

const MyPageHeader = ({ title }) => {
  return (
    <HeaderBlock>
      <Wrapper>
        <Link to="/mypage" className="left">
          {'<'}
        </Link>
        <div className="center">{title}</div>
        <div className="right"></div>
      </Wrapper>
      <Spacer />
    </HeaderBlock>
  );
};

export default MyPageHeader;
