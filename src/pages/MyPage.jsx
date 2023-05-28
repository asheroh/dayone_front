import React from 'react';
import HeaderContainer from '../components/common/HeaderContainer';
import MyBookcase from '../components/mypage/MyBookcase';
import MyInfoViewer from '../components/mypage/MyInfoViewer';

const MyPage = () => {
  return (
    <>
      <HeaderContainer />
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
