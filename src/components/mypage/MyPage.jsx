import React from 'react';
import MyBookcase from './MyBookcase';
import MyInfoViewer from './MyInfoViewer';
import { MypageContainer } from '../MypageStyle';

const MyPage = () => {
  return (
    <>
      <MypageContainer>
        <MyInfoViewer />
        <br />
        <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
        <br />
        <MyBookcase />
      </MypageContainer>
    </>
  );
};

export default MyPage;
