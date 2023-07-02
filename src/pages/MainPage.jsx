import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../components/common/HeaderContainer';
import BestPostList from '../components/post/BestPostList';
import DatePostList from '../components/post/DatePostList';
import { Container } from '../components/HomeStyle';

const MainPage = () => {
  return (
    <Container>
      <HeaderContainer />
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
