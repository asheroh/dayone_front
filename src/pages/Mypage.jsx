import React from 'react';
import HeaderContainer from '../components/common/HeaderContainer';
import MyBookcase from '../components/mypage/MyBookcase';

const Mypage = () => {
  return (
    <>
      <HeaderContainer />
      <br /> <br /> <br /> <br /> <br /> <br />
      <p>마이페이지 내정보</p>
      <MyBookcase />
    </>
  );
};

export default Mypage;
