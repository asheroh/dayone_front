import React from 'react';
import MyBookcase from '../components/mypage/MyBookcase';
import MyInfoViewer from '../components/mypage/MyInfoViewer';
import Header from '../components/common/Header';

const MyPage = () => {
  return (
    <>
      <Header />
      <br /> <br /> <br /> <br /> <br /> <br />
      <MyInfoViewer />
      <br />
      <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
      <br />
      <MyBookcase />
    </>
  );
};

export default MyPage;
