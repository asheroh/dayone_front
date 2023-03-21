import React from 'react';
import AllPost from '../components/DayRecord/AllPost';
import Nav from '../components/Nav/Nav';
import BestPost from '../components/DayRecord/BestPost';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Nav />
      <br />
      {/* <p>Main 페이지</p> */}
      <br />
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
