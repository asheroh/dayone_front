import React from 'react';
import { useLocation } from 'react-router-dom';
import MyBookPostList from '../components/mypage/MyBookPostList';
import MyPageHeader from '../components/mypage/MyPageHeader';
import {
  MypageBookImage,
  PostDetailBody,
  PostDetailContainer,
} from '../components/MypageStyle';

const MyBookPostListPage = () => {
  const location = useLocation();
  const title = location.state.title;
  console.log('booktitle:', title);
  const thumbnailImage = location.state.thumbnailImage;

  return (
    <PostDetailContainer>
      <MyPageHeader title={title} />
      <PostDetailBody>
        <MypageBookImage
          src={thumbnailImage}
          alt="book_thumbnail_image"
          style={{
            objectFit: 'cover',
            aspectRatio: '11/16',
          }}
        />
        <MyBookPostList />
      </PostDetailBody>
    </PostDetailContainer>
  );
};

export default MyBookPostListPage;
