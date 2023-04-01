import React, { useState, useEffect, useRef } from 'react';
import Router from '../../Router';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDebounce } from '../../hooks/useDebounce';
import './CreatePostForm.css';

const CreatePostForm = () => {
  const navigate = useNavigate();
  const [bookname, setBookname] = useState('');
  const [bookImageUrl, setBookImageUrl] = useState('img/book_default.png');
  const [passage, setPassage] = useState('');
  const [comment, setComment] = useState('');

  // API search 결과
  const [searchResults, setSearchResults] = useState([]);
  // 검색 상태
  const [isSearching, setIsSearching] = useState(false);
  // 선택 상태
  const [isSelected, setIsSelected] = useState(false);

  // debounce 검색어
  const debouncedSearchTerm = useDebounce(bookname, 500);

  // 임시 유저 데이터
  const countDay = 1;
  const username = '준서';
  const sympathyCount = 0;
  const imageUrl =
    'https://cdn.aitimes.com/news/photo/202204/143854_149286_5624.png';

  useEffect(() => {
    if (!isSelected && debouncedSearchTerm) {
      setIsSearching(true);
      searchCharacters(debouncedSearchTerm).then((results) => {
        setIsSearching(false);
        setSearchResults(results);
      });
    } else {
      setSearchResults([]);
      setIsSearching(false);
      setIsSelected(false);
    }
  }, [debouncedSearchTerm]);

  // 책 API search 함수
  const searchCharacters = (search) => {
    return axios
      .get(
        `http://ec2-52-79-40-57.ap-northeast-2.compute.amazonaws.com:3001/posts?query=${search}&display=10&start=1`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcxOTI0MjczMCwiaWF0IjoxNjgwMzUwNjg3LCJleHAiOjE2ODA0ODUwODcsImlzcyI6Iu2GoO2BsOuwnOq4ieyekCJ9.XflYnXW-V9Q_sxdZS7jjYYjMC3orwJQpU0fFpRGK21U',
          },
        }
      )
      .then((r) => r.data)
      .catch((error) => {
        console.error(error);
        return [];
      });
  };

  const handleBookSelect = (item) => {
    setBookname(item.title);
    setBookImageUrl(item.image);
    setIsSelected(true);
    setSearchResults([]);
  };

  const handleBookHover = (image) => {
    setBookImageUrl(image);
  };

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
        <div className="search_book">
          {searchResults.map((item) => (
            <div
              key={item.isbn}
              className="search_book_item"
              onClick={() => handleBookSelect(item)}
              onMouseOver={() => handleBookHover(item.image)}
            >
              {item.title}
            </div>
          ))}
        </div>
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
