import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PostDetailHeader } from '../MypageStyle';
import { PostBackButton, PostDetailOwner } from '../DayRecordStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const MyPageHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <PostDetailHeader>
      <PostBackButton onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </PostBackButton>
      <PostDetailOwner>{title}</PostDetailOwner>
    </PostDetailHeader>
  );
};

export default MyPageHeader;
