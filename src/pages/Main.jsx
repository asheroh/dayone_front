import React from 'react';
import AllPost from '../components/DayRecord/AllPost';
import BestPost from '../components/DayRecord/BestPost';
import { Link } from 'react-router-dom';
import HeaderContainer from '../components/common/HeaderContainer';

const Main = () => {
  return (
    <>
      <HeaderContainer />
      <br /> <br /> <br /> <br /> <br /> <br />
      <BestPost />
      <br />
      <AllPost />
      <br />
      <Link to="/postform">
        <button>기록하기</button>
      </Link>
    </>
  );
};

export default Main;
