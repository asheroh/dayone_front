import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import * as authAPI from '../../lib/api/auth';
import {
  PostBackButton,
  PostDeleteButton,
  PostDetailOwner,
  PostHeader,
} from '../DayRecordStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const PostViewerHeader = ({ post }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const jsonUser = localStorage.getItem('user');
  const user = JSON.parse(jsonUser);
  // console.log('header user:', user);

  const onClickDeleteBtn = async () => {
    const request = await authAPI
      .deletePost(cookies.access_token, params['postId'])
      .then((r) => {
        console.log('deletePost return data:', r.data);
        if (r.status >= 200 && r.status < 300) {
          alert('기록을 삭제했습니다!');
          navigate(-1);
        }
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  return (
    <PostHeader>
      <PostBackButton onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </PostBackButton>
      <PostDetailOwner>{post.username} 덧붙임</PostDetailOwner>
      {post.user_id === user.userId ? (
        <PostDeleteButton
          onClick={() => {
            onClickDeleteBtn();
          }}
        >
          삭제
        </PostDeleteButton>
      ) : (
        ''
      )}
    </PostHeader>
  );
};

export default PostViewerHeader;
