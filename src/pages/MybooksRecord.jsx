import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MypageHeader from '../components/mypage/MypageHeader';
import BookRecord from '../components/mypage/BookRecord';

const MybooksRecord = () => {
  const location = useLocation();
  const title = location.state.title;
  console.log('booktitle:', title);
  const thumbnailImage = location.state.thumbnailImage;

  return (
    <div>
      <MypageHeader title={title} />
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
      <BookRecord />
    </div>
  );
};

export default MybooksRecord;
