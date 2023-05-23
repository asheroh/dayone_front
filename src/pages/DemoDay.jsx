import React from 'react';
import DemodayList from '../components/Demoday/DemodayList';
import HeaderContainer from '../components/common/HeaderContainer';
import { Link } from 'react-router-dom';

const DemoDay = () => {
  return (
    <>
      <HeaderContainer />
      <br /> <br /> <br /> <br /> <br /> <br />
      <DemodayList />
      <br />
      <Link to="/demodayform">
        <button>+ 데모 만들기</button>
      </Link>
    </>
  );
};

export default DemoDay;
