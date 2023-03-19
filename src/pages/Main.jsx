import React from 'react';
import AllPost from '../components/DayRecord/AllPost';
import Nav from '../components/Nav/Nav';
import BestPost from '../components/DayRecord/BestPost';

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
    </>
  );
};

export default Main;
