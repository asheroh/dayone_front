import React from 'react';
import './PostItem.css';

const PostListItem = ({ post }) => {
  return (
    <div>
      <img
        src={post.image_url}
        alt="user image_url"
        className="profile_image"
      ></img>
      <h3>
        {post.bookname} / {post.day_count} 일차
      </h3>
      <p>{post.username}</p>
      <p>passage: {post.passage}</p>
      <p>comment: {post.comment}</p>
      <p>공감수: {post.sympathy_count}</p>
      <p>작성일: {post.created_at}</p>
      <br />
    </div>
  );
};

export default PostListItem;
