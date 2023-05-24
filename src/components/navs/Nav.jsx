import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBlock = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between; // 자식 엘리멘트 사이의 여백을 최대로 설정
  .nav_tap {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
`;

const Nav = () => {
  return (
    <NavBlock>
      <div className="nav_tap">
        <Link to="/">데이기록</Link> &nbsp;
        <Link to="/demoday">데모데이</Link> &nbsp;
        <Link to="/mypage">나의기록</Link> &nbsp;
      </div>
    </NavBlock>
  );
};

export default Nav;
