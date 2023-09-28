import React, { useEffect, useState } from 'react';
import * as D from '../DayRecordStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

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
  console.log(post);
  return (
    <D.CommentContainer>
      <D.HotCommentBoxHeader>
        <D.UserBox>
          <D.UserProfile
            postUserProfile={post.user_profile_img}
          ></D.UserProfile>
          <D.UserName>
            {post.username} | {post.count_day}일차 기록
          </D.UserName>
        </D.UserBox>
        <D.DateBox>{formatDateAndTime(post.created_at)}</D.DateBox>
      </D.HotCommentBoxHeader>
      <D.HotCommentBoxBody>
        <D.BookTitle isCool={isCool}>
          {post.bookname.length > 25
            ? post.bookname.substring(0, 25) + '...'
            : post.bookname}
        </D.BookTitle>
        <D.BookContent isCool={isCool}>
          {post.passage.length > 118
            ? post.passage.substring(0, 118) + '...'
            : post.passage}
        </D.BookContent>
      </D.HotCommentBoxBody>
      <D.CommentBorder>
        <D.CommentButton isCool={isCool}>Comment</D.CommentButton>
        {post.is_sympathy === '1' ? (
          <D.LikeButton>
            <FontAwesomeIcon icon={faHeart} /> {post.sympathy_count}
          </D.LikeButton>
        ) : (
          ''
        )}
      </D.CommentBorder>
      <D.HotCommentBoxFooter>
        <D.BookContent isCool={isCool}>
          {post.comment.length > 55
            ? post.comment.substring(0, 55) + '...'
            : post.comment}
        </D.BookContent>
      </D.HotCommentBoxFooter>
      <D.SympathySection>
        <D.SympathyButton isLike={post.is_like}>
          <FontAwesomeIcon icon={faHeart} /> {post.is_like}
        </D.SympathyButton>
        <D.SympathyButton isCool={post.is_cool}>
          <FontAwesomeIcon icon={faThumbsUp} /> {post.is_cool}
        </D.SympathyButton>
      </D.SympathySection>
    </D.CommentContainer>
  );
};

export default PostListItem;
