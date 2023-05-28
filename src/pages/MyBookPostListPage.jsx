import React from 'react';
import { useLocation } from 'react-router-dom';
import MyBookPostList from '../components/mypage/MyBookPostList';
import MyPageHeader from '../components/mypage/MyPageHeader';

const MyBookPostListPage = () => {
  const location = useLocation();
  const title = location.state.title;
  console.log('booktitle:', title);
  const thumbnailImage = location.state.thumbnailImage;

  return (
    <div>
      <MyPageHeader title={title} />
      <br /> <br /> <br /> <br /> <br />
      <img
        src={thumbnailImage}
        alt="thumbnail_image"
        className="thumbnail_image"
        style={{
          width: '200px',
          height: 'auto',
          objectFit: 'cover',
          aspectRatio: '11/16',
        }}
      ></img>
      <br />
      <MyBookPostList />
    </div>
  );
};

export default MyBookPostListPage;
