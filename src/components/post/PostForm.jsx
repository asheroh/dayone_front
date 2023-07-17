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
  PostContentInput,
  PostCommentInput,
  CommentButton,
  PostCommentBox,
  BookSelectRightBox,
  BookSelectLeftBox,
  PostSmallImage,
  PostLogoText,
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
          <PostLogoText>기록</PostLogoText>
        </PostLogoBox>
        <PostHandleButton onClick={handleSubmit}>등록</PostHandleButton>
      </PostHeader>
      <PostBody>
        <PostFormBox>
          <PostTitleInput
            type="text"
            placeholder="책 제목을 입력해주세요"
            value={bookname}
            onChange={(e) => setBookname(e.target.value)}
          />
          <PostBookSelectSection bookname={bookname} isSelected={isSelected}>
            {searchResults.length === 0 ? (
              <PostBookSelectBox>일치하는 도서가 없습니다.</PostBookSelectBox>
            ) : (
              <BookSelectLeftBox>
                {searchResults?.map((item) => (
                  <PostBookSelectBox
                    key={item.isbn}
                    onClick={() => handleBookSelect(item)}
                    onMouseOver={() => handleBookHover(item.image)}
                  >
                    {item.title}
                  </PostBookSelectBox>
                ))}
              </BookSelectLeftBox>
            )}
            <BookSelectRightBox>
              <PostSmallImage
                src={bookImageUrl}
                alt="booklogo"
                loading="lazy"
              />
            </BookSelectRightBox>
          </PostBookSelectSection>
          <PostImageSection>
            <PostImage src={bookImageUrl} alt="booklogo" loading="lazy" />
          </PostImageSection>
          <PostContentInput
            type="text"
            placeholder="인상 깊은 구절을 적어주세요"
            value={passage}
            onChange={(e) => setPassage(e.target.value)}
          />
          <PostCommentBox>
            <CommentButton>Comment</CommentButton>
          </PostCommentBox>
          <PostCommentInput
            type="text"
            placeholder="덧붙임을 작성해주세요"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </PostFormBox>
      </PostBody>
    </PostContainer>
  );
};

export default PostForm;
