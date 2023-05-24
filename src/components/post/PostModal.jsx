import React from 'react';
import './PostItem.css';
import './PostModal.css';

const PostModal = ({
  image_url,
  book_image_url,
  title,
  day_count,
  username,
  passage,
  comment,
  sympathy_count,
  created_at,
}) => {
  return (
    <div className="modal">
      <div className="wrapper-modal">
        <div>
          <img
            src={image_url}
            alt="user image_url"
            className="profile_image"
          ></img>
          <p>
            {username} / {day_count} 일차
          </p>
          <p>{created_at}</p>
        </div>
        <div>
          <img
            src={book_image_url}
            alt="book_image_url"
            className="book_image"
          ></img>
          <p>bookname: {title}</p>
          <br />
          <p>passage: {passage}</p>
          <br />
          <p>comment: {comment}</p>
          <br />
          <p>sympathy_count: {sympathy_count}</p>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
