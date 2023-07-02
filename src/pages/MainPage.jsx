import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BestPostList from '../components/post/BestPostList';
import DatePostList from '../components/post/DatePostList';
import { Container } from '../components/HomeStyle';
import Header from '../components/common/Header';

const MainPage = () => {
  // Nav Pagination-------------------------------------
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Container>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <br /> <br /> <br /> <br /> <br /> <br />
      <BestPostList />
      <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
      <br />
      <DatePostList />
      <br />
      <Link to="/postform">
        <button>기록하기</button>
      </Link>
    </Container>
  );
};

export default MainPage;
