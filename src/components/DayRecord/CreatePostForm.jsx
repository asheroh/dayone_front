import React, { useState } from 'react';
import Router from '../../Router';
import { Link, useNavigate } from 'react-router-dom';

const CreatePostForm = () => {
  const navigate = useNavigate();

  const countDay = 1;
  const username = '준서';
  const sympathyCount = 0;
  const imageUrl =
    'https://cdn.aitimes.com/news/photo/202204/143854_149286_5624.png';

  const [bookname, setBookname] = useState('');
  const [bookImageUrl, setBookImageUrl] = useState(
    'https://openimage.interpark.com/goods_image_big/2/7/7/2/11019692772_l.jpg'
  );
  const [passage, setPassage] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    await fetch('http://127.0.0.1:8090/api/collections/post/records', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        count_day: countDay,
        bookname,
        username,
        passage,
        comment,
        sympathy_count: sympathyCount,
        book_image_url: bookImageUrl,
        image_url: imageUrl,
      }),
    }).then(navigate('/'));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Link to="/">
            <button>취소</button>
          </Link>
          <p>N일차</p>
          <button type="submit">Create Post</button>
        </div>
        <input
          type="text"
          placeholder="bookname"
          value={bookname}
          onChange={(e) => setBookname(e.target.value)}
        />
        <br />
        <img src={bookImageUrl} alt="logo" className="book_image"></img>

        <br />
        <input
          type="text"
          placeholder="passage"
          value={passage}
          onChange={(e) => setPassage(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CreatePostForm;
