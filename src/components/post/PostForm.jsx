import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { useCookies } from 'react-cookie';
import * as authAPI from '../../lib/api/auth';
import SmallWhiteLogo from '../../assets/images/dayone_small_logo_white.svg';
import SmallBlackLogo from '../../assets/images/dayone_small_logo_black.svg';
import {
  PostBody,
  PostContainer,
  PostFormBox,
  PostHandleButton,
  PostHeader,
  PostImageSection,
  PostLogo,
  PostLogoBox,
  PostTitleInput,
  PostBookSelectSection,
  PostBookSelectBox,
  PostImage,
} from '../DayRecordStyle';
import { Context } from '../../context/Context';

const PostForm = () => {
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
  const [postData, setPostData] = useState(null);
  const { themeMode } = useContext(Context);
  // API search 결과
  const [searchResults, setSearchResults] = useState([]);
  // 검색 상태
  const [isSearching, setIsSearching] = useState(false);
  // 선택 상태
  const [isSelected, setIsSelected] = useState(false);

  // debounce 검색어
  const debouncedSearchTerm = useDebounce(bookname, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
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

  const handleSubmit = async () => {
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
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(isSelected);
  return (
    <PostContainer>
      <PostHeader>
        <PostHandleButton onClick={() => navigate(-1)}>취소</PostHandleButton>
        <PostLogoBox>
          <PostLogo
            src={themeMode === 'black' ? SmallWhiteLogo : SmallBlackLogo}
            alt="dayone"
            loading="lazy"
          />
          n일차 기록
        </PostLogoBox>
        <PostHandleButton onClick={handleSubmit}>등록</PostHandleButton>
      </PostHeader>
      <PostBody>
        <PostFormBox>
          <PostTitleInput
            type="text"
            placeholder="책 제목"
            value={bookname}
            onChange={(e) => setBookname(e.target.value)}
          />
          <PostBookSelectSection bookname={bookname} isSelected={isSelected}>
            {searchResults.length === 0 ? (
              <PostBookSelectBox>일치하는 도서가 없습니다.</PostBookSelectBox>
            ) : (
              searchResults?.map((item) => (
                <PostBookSelectBox
                  key={item.isbn}
                  onClick={() => handleBookSelect(item)}
                  onMouseOver={() => handleBookHover(item.image)}
                >
                  {item.title}
                </PostBookSelectBox>
              ))
            )}
          </PostBookSelectSection>
          <PostImageSection>
            <PostImage src={bookImageUrl} alt="booklogo" loading="lazy" />
          </PostImageSection>
        </PostFormBox>
      </PostBody>
      {/* <FormHeader headerTitle={'기록하기'} clickMethod={handleSubmit} /> */}
      {/* <br /> <br /> <br /> <br /> <br />
      <form>
        <input
          style={{ width: '300px', height: '50px' }}
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
        <br />

        <img
          src={bookImageUrl}
          alt="logo"
          className="search book_image"
          style={{
            width: '200px',
            height: 'auto',
            objectFit: 'cover',
            aspectRatio: '11/16',
          }}
        ></img>

        <br />
        <br />

        <textarea
          style={{ width: '300px', height: '200px' }}
          type="text"
          placeholder="passage"
          value={passage}
          onChange={(e) => setPassage(e.target.value)}
        />
        <br />
        <textarea
          style={{ width: '300px', height: '200px' }}
          type="text"
          placeholder="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </form> */}
    </PostContainer>
  );
};

export default PostForm;
