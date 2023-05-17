import React, { useState, useEffect, useRef } from 'react';
import Router from '../../Router';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDebounce } from '../../hooks/useDebounce';
import { useCookies } from 'react-cookie';
import * as authAPI from '../../lib/api/auth';
import './CreatePostForm.css';

const CreatePostForm = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const [bookname, setBookname] = useState('');
  const [bookImageUrl, setBookImageUrl] = useState('img/book_default.png');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [pubdate, setPubdate] = useState('');
  const [isbn, setIsbn] = useState('');
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
  const searchCharacters = async (search) => {
    return await authAPI
      .searchBook(search, cookies.access_token)
      .then((r) => r.data.data)
      .catch((error) => {
        console.error(error);
        return [];
      });
  };

  // "author": "리처드 도킨스",
  // "publisher": "을유문화사",
  // "pubdate": "20230130",
  // "isbn": "9788932473901"

  const handleBookSelect = (item) => {
    setBookname(item.title);
    setBookImageUrl(item.image);
    setAuthor(item.author);
    setPublisher(item.publisher);
    setPubdate(item.pubdate);
    setIsbn(item.isbn);
    setIsSelected(true);
    setSearchResults([]);
  };

  const handleBookHover = (image) => {
    setBookImageUrl(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 페이지 이동을 저지
    const PostData = {
      passage,
      comment,
      bookdata: {
        title: bookname,
        image: bookImageUrl,
        author,
        publisher,
        pubdate,
        isbn,
      },
    };

    await authAPI
      .addPost(cookies.access_token, PostData)
      .then((r) => {
        console.log(231);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
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
