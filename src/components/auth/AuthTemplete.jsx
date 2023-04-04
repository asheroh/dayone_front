import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * 로그인 페이지 레이아웃
 */
const AuthTempleteBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgb(77, 77, 77);
  // flex로 내부 중앙정렬
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: black;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    font-size: 2em;
    letter-spacing: 2px;
  }
  color: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: 360px;
  background: black;
  border-radius: 2px;
`;

const AuthTemplete = ({ children }) => {
  return (
    <AuthTempleteBlock>
      <WhiteBox>
        <div className="logo-area">
          DAY
          <br />
          ONE
        </div>
        {children}
      </WhiteBox>
    </AuthTempleteBlock>
  );
};

export default AuthTemplete;
