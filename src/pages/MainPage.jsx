import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../components/common/HeaderContainer';
import BestPostList from '../components/post/BestPostList';
import AllPostList from '../components/post/AllPostList';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <br /> <br /> <br /> <br /> <br /> <br />
      <BestPostList />
      <br />
      <AllPostList />
      <br />
      <Link to="/postform">
        <button>기록하기</button>
      </Link>
    </>
  );
};

export default MainPage;
