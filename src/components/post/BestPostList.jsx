import React, { useState, useEffect } from 'react';
import * as authAPI from '../../lib/api/auth';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import PostHotList from './PostHotList';
import {
  HotCommentEmptyIcon,
  HotCommentEmptyText,
  HotCommentHeader,
  HotCommentScrollBox,
  HotCommentSection,
} from '../DayRecordStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';

const BestPostList = () => {
  const [posts, setPosts] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await authAPI
      .bestPost(cookies.access_token)
      .then((r) => {
        setPosts(r.data.data);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  return (
    <HotCommentSection>
      <br />
      <HotCommentHeader>실시간 인기 덧붙임</HotCommentHeader>
      <HotCommentScrollBox>
        {posts.length === 0 ? (
          <HotCommentEmptyIcon>
            <FontAwesomeIcon icon={faFeatherPointed} />
            <HotCommentEmptyText>
              실시간 인기 덧붙임이 없습니다.
            </HotCommentEmptyText>
          </HotCommentEmptyIcon>
        ) : (
          <>
            {posts?.map((post) => {
              return (
                <Link
                  to={`/posts/${post.post_id}`}
                  state={{ post: post }}
                  key={post.post_id}
                >
                  <PostHotList post={post} />
                </Link>
              );
            })}
          </>
        )}
      </HotCommentScrollBox>
    </HotCommentSection>
  );
};

export default BestPostList;
