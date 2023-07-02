import React from 'react';
import DemodayList from '../components/DemoDay/DemodayList';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';

const DemodayListPage = () => {
  return (
    <>
      <Header />
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
