import React, { useEffect, useState } from 'react';
import * as authAPI from '../../lib/api/auth';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import {
  CommentButton,
  FooterLeftBox,
  FooterRightBox,
  HeartButton,
  NiceButton,
  PostBody,
  PostBookComment,
  PostBookContentBox,
  PostBookFooter,
  PostBookName,
  PostBookPassage,
  PostBookThumbnail,
  PostDetailDate,
  PostDetailName,
  PostDetailOwnerBox,
  PostDetailThumbnail,
  PostDetailThumbnailBox,
  PostDetailThumbnailLeft,
  PostDetailThumbnailRight,
} from '../DayRecordStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faShareAlt,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

const PostViewer = () => {
  const [post, setPost] = useState({});
  const [isSympathy, setIsSympathy] = useState('0');
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();
  const params = useParams();

  // 단건 조회 완료시
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await authAPI
      .postOne(cookies.access_token, params['postId'])
      .then((r) => {
        // console.log('기록 단건 조회 res data:', r.data.data[0]);
        setPost(r.data.data[0]);
        setIsSympathy(r.data.data[0].is_sympathy);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  const onClickSympathyBtn = async () => {
    if (isSympathy == '1') {
      const request = await authAPI
        .noSympathize(cookies.access_token, params['postId'])
        .then((r) => {
          setIsSympathy('0');
        })
        .catch((error) => {
          alert('토큰이 만료되었습니다.');
          localStorage.removeItem('user');
          navigate('/login');
        });
    } else {
      const request = await authAPI
        .sympathize(cookies.access_token, params['postId'])
        .then((r) => {
          setIsSympathy('1');
        })
        .catch((error) => {
          alert('토큰이 만료되었습니다.');
          localStorage.removeItem('user');
          navigate('/login');
        });
    }
  };

  return (
    <PostBody>
      <PostDetailThumbnailBox>
        <PostDetailThumbnailLeft>
          <PostDetailThumbnail
            src={post.user_profile_img}
            alt="user_image"
            loading="lazy"
          />
          <PostDetailOwnerBox>
            <PostDetailName>{post.username}</PostDetailName>
            <PostDetailDate>{post.count_day}일차 기록</PostDetailDate>
          </PostDetailOwnerBox>
        </PostDetailThumbnailLeft>
        <PostDetailThumbnailRight>{post.created_at}</PostDetailThumbnailRight>
      </PostDetailThumbnailBox>
      <br />
      <PostBookThumbnail
        src={post.book_image}
        alt="book_image"
        loading="lazy"
        style={{
          objectFit: 'cover',
          aspectRatio: '11/16',
        }}
      />
      <br />
      <PostBookName>{post.bookname}</PostBookName>
      <br /> <br /> <br />
      <PostBookContentBox>
        <PostBookPassage>{post.passage}</PostBookPassage>
        <br /> <br />
        <CommentButton>Comment</CommentButton>
        <br />
        <PostBookComment>{post.comment}</PostBookComment>
      </PostBookContentBox>
      <PostBookFooter>
        <FooterLeftBox>
          <NiceButton
            isSympathy={isSympathy}
            onClick={() => {
              onClickSympathyBtn();
            }}
          >
            <FontAwesomeIcon icon={faThumbsUp} /> 멋져요
          </NiceButton>
          <HeartButton>
            <FontAwesomeIcon icon={faHeart} /> 공감해요
          </HeartButton>
        </FooterLeftBox>
        <FooterRightBox>
          <FontAwesomeIcon icon={faShareAlt} />
        </FooterRightBox>
      </PostBookFooter>
    </PostBody>
  );
};

export default PostViewer;
