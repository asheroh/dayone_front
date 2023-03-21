import React from 'react';
import './PostItem.css';
import './PostModal.css';

const PostModal = ({
  image_url,
  book_image_url,
  bookname,
  count_day,
  username,
  passage,
  comment,
  sympathy_count,
  created,
}) => {
  return (
    <div className="modal">
      <div className="wrapper-modal">
        <div>
          <img src={image_url} alt="logo" className="profile_image"></img>
          <p>
            {username} / {count_day} 일차
          </p>
          <p>{created}</p>
        </div>
        <div>
          <img src={book_image_url} alt="logo" className="book_image"></img>
          <p>{bookname}</p>
          <br />
          <p>{passage}</p>
          <br />
          <p>{comment}</p>
          <br />
          <p>{sympathy_count}</p>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
