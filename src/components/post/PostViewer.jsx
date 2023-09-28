import React, { useEffect, useState } from 'react';
import * as authAPI from '../../lib/api/auth';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import * as D from '../DayRecordStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faShareAlt,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

const PostViewer = () => {
  const [post, setPost] = useState({});
  const [isLike, setIsLike] = useState(false);
  const [isCool, setIsCool] = useState(false);
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
        setIsLike(r.data.data[0].is_like);
        setIsCool(r.data.data[0].is_cool);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  const onClickSympathyBtn = async (likeType) => {
    const catchFunc = (err) => {
      alert('토큰이 만료되었습니다.');
      localStorage.removeItem('user');
      navigate('/login');
    };
    if (isCool === '1' && likeType === 'cool') {
      await authAPI
        .noSympathize(cookies.access_token, params['postId'], likeType)
        .then((r) => {
          setIsCool('0');
        })
        .catch((err) => {
          catchFunc(err);
        });
    } else if (isCool === '0' && likeType === 'cool') {
      await authAPI
        .sympathize(cookies.access_token, params['postId'], likeType)
        .then((r) => {
          setIsCool('1');
        })
        .catch((err) => {
          catchFunc(err);
        });
    } else if (isLike === '1' && likeType === 'like') {
      await authAPI
        .noSympathize(cookies.access_token, params['postId'], likeType)
        .then((r) => {
          setIsLike('0');
        })
        .catch((err) => {
          catchFunc(err);
        });
    } else if (isLike === '0' && likeType === 'like') {
      await authAPI
        .sympathize(cookies.access_token, params['postId'], likeType)
        .then((r) => {
          setIsLike('1');
        })
        .catch((err) => {
          catchFunc(err);
        });
    }
  };

  return (
    <D.PostBody>
      <D.PostDetailThumbnailBox>
        <D.PostDetailThumbnailLeft>
          <D.PostDetailThumbnail
            src={post.user_profile_img}
            alt="user_image"
            loading="lazy"
          />
          <D.PostDetailOwnerBox>
            <D.PostDetailName>{post.username}</D.PostDetailName>
            <D.PostDetailDate>{post.count_day}일차 기록</D.PostDetailDate>
          </D.PostDetailOwnerBox>
        </D.PostDetailThumbnailLeft>
        <D.PostDetailThumbnailRight>
          {post.created_at?.slice(0, 19)}
        </D.PostDetailThumbnailRight>
      </D.PostDetailThumbnailBox>
      <br />
      <D.PostBookThumbnail
        src={post.book_image}
        alt="book_image"
        loading="lazy"
        style={{
          objectFit: 'cover',
          aspectRatio: '11/16',
        }}
      />
      <br />
      <D.PostBookName>{post.bookname}</D.PostBookName>
      <br /> <br /> <br />
      <D.PostBookContentBox>
        <D.PostBookPassage>{post.passage}</D.PostBookPassage>
        <br /> <br />
        <D.CommentButton>Comment</D.CommentButton>
        <br />
        <D.PostBookComment>{post.comment}</D.PostBookComment>
      </D.PostBookContentBox>
      <D.PostBookFooter>
        <D.FooterLeftBox>
          <D.HeartButton
            is_like={isLike}
            onClick={() => {
              onClickSympathyBtn('like');
            }}
          >
            <FontAwesomeIcon icon={faHeart} /> 공감해요
          </D.HeartButton>
          <D.CoolButton
            is_cool={isCool}
            onClick={() => {
              onClickSympathyBtn('cool');
            }}
          >
            <FontAwesomeIcon icon={faThumbsUp} /> 멋져요
          </D.CoolButton>
        </D.FooterLeftBox>
        <D.FooterRightBox>
          <FontAwesomeIcon icon={faShareAlt} />
        </D.FooterRightBox>
      </D.PostBookFooter>
    </D.PostBody>
  );
};

export default PostViewer;
