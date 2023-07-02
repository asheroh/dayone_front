import React, { useEffect, useState } from 'react';
import {
  BookContent,
  BookTitle,
  CommentBorder,
  CommentButton,
  CommentContainer,
  DateBox,
  HotCommentBoxBody,
  HotCommentBoxFooter,
  HotCommentBoxHeader,
  HotCommentContainer,
  LikeButton,
  UserBox,
  UserName,
  UserProfile,
} from '../DayRecordStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const PostListItem = ({ post }) => {
  const [isCool, setIsCool] = useState(Boolean);
  useEffect(() => {
    setIsCool(true);
    return () => {
      setIsCool(false);
    };
  }, []);

  const formatDateAndTime = (inputDate) => {
    // 문자열로부터 Date 객체 생성
    let date = new Date(inputDate);

    // 원하는 형식으로 날짜 변환
    const dateOptions = { month: '2-digit', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', dateOptions);

    // 원하는 형식으로 시간 변환
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
    const formattedTime = date.toLocaleTimeString('en-US', timeOptions);
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <CommentContainer>
      <HotCommentBoxHeader>
        <UserBox>
          <UserProfile postUserProfile={post.user_profile_img}></UserProfile>
          <UserName>
            {post.username} | {post.count_day}일차 기록
          </UserName>
        </UserBox>
        <DateBox>{formatDateAndTime(post.created_at)}</DateBox>
      </HotCommentBoxHeader>
      <HotCommentBoxBody>
        <BookTitle isCool={isCool}>
          {post.bookname.length > 25
            ? post.bookname.substring(0, 25) + '...'
            : post.bookname}
        </BookTitle>
        <BookContent isCool={isCool}>
          {post.passage.length > 118
            ? post.passage.substring(0, 118) + '...'
            : post.passage}
        </BookContent>
      </HotCommentBoxBody>
      <CommentBorder>
        <CommentButton isCool={isCool}>Comment</CommentButton>
        {post.is_sympathy === '1' ? (
          <LikeButton>
            <FontAwesomeIcon icon={faHeart} /> {post.sympathy_count}
          </LikeButton>
        ) : (
          ''
        )}
      </CommentBorder>
      <HotCommentBoxFooter>
        <BookContent isCool={isCool}>
          {post.comment.length > 55
            ? post.comment.substring(0, 55) + '...'
            : post.comment}
        </BookContent>
      </HotCommentBoxFooter>
    </CommentContainer>
  );
};

export default PostListItem;
