import React from 'react';
import MyBookcase from '../components/mypage/MyBookcase';
import MyInfoViewer from '../components/mypage/MyInfoViewer';
import { MypageContainer } from '../components/MypageStyle';

const MyPage = () => {
  return (
    <>
      <MypageContainer>
        <MyInfoViewer />
        <MyBookcase />
      </MypageContainer>
    </>
  );
};

export default MyPage;
