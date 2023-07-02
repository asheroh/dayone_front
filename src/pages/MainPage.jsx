import React, { useState } from 'react';
import { Container } from '../components/HomeStyle';
import Header from '../components/common/Header';
import DayRecord from '../components/DayRecord/DayRecord';
import DemoDay from '../components/DemoDay/DemoDay';

const MainPage = () => {
  // Nav Pagination-------------------------------------
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Container>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 0 ? (
        <DayRecord />
      ) : currentPage === 1 ? (
        <DemoDay />
      ) : currentPage === 2 ? (
        '나의 기록 페이지'
      ) : (
        ''
      )}
    </Container>
  );
};

export default MainPage;
