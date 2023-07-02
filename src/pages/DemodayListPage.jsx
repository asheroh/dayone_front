import React from 'react';
import DemodayList from '../components/demoday/DemodayList';
import HeaderContainer from '../components/common/HeaderContainer';
import { Link } from 'react-router-dom';

const DemodayListPage = () => {
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

export default DemodayListPage;
