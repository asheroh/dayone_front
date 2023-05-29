import React from 'react';
import './PostItem.css';

const PostListItem = ({ post }) => {
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
    <div>
      <div style={{ display: 'flex' }}>
        <img
          src={post.user_profile_img}
          alt="user image_url"
          className="profile_image"
        ></img>
        <span>
          {post.username} / {post.count_day}일차 기록
        </span>
        <span style={{ marginLeft: '300px' }}>
          {formatDateAndTime(post.created_at)}
        </span>
      </div>
      <br />
      <p>{post.bookname}</p>
      <br />
      <p>passage: {post.passage}</p>
      <br />
      <p>comment: {post.comment}</p>
      <br />
      <p>
        공감: {post.is_sympathy === '1' ? '❤️' : '🖤'}
        {post.sympathy_count}
      </p>
      <br />
      <p>
        -----------------------------------------------------------------------------
      </p>
      <br />
    </div>
  );
};

export default PostListItem;
