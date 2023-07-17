import React, { useState } from 'react';
import { Body, Container } from '../components/HomeStyle';
import Header from '../components/common/Header';
import DayRecord from './DayRecord';
import MyPage from './MyPage';
import DemodayListPage from './DemodayListPage';

const MainPage = () => {
  // Nav Pagination-------------------------------------
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Container>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Body>
        {currentPage === 0 ? (
          <DayRecord />
        ) : currentPage === 1 ? (
          <DemodayListPage />
        ) : currentPage === 2 ? (
          <MyPage />
        ) : (
          ''
        )}
      </Body>
    </Container>
  );
};

export default MainPage;
