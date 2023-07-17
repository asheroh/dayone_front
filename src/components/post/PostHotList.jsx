import React from 'react';
import {
  BookContent,
  BookTitle,
  CommentBorder,
  CommentButton,
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

const PostHotList = ({ post }) => {
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
    <HotCommentContainer>
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
        <BookTitle>
          {post.bookname.length > 25
            ? post.bookname.substring(0, 25) + '...'
            : post.bookname}
        </BookTitle>
        <BookContent>
          {post.passage.length > 118
            ? post.passage.substring(0, 118) + '...'
            : post.passage}
        </BookContent>
      </HotCommentBoxBody>
      <CommentBorder>
        <CommentButton>Comment</CommentButton>
        {post.is_sympathy === '1' ? (
          <LikeButton>
            <FontAwesomeIcon icon={faHeart} /> {post.sympathy_count}
          </LikeButton>
        ) : (
          ''
        )}
      </CommentBorder>
      <HotCommentBoxFooter>
        <BookContent>
          {post.comment.length > 25
            ? post.comment.substring(0, 25) + '...'
            : post.comment}
        </BookContent>
      </HotCommentBoxFooter>
    </HotCommentContainer>
  );
};

export default PostHotList;
