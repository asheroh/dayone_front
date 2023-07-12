import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import * as authAPI from '../../lib/api/auth';
<<<<<<< HEAD
import {
  PostBackButton,
  PostDeleteButton,
  PostDetailOwner,
  PostHeader,
} from '../DayRecordStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
=======

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: black;
  color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; // 자식 엘리먼트 사이의 여백을 최대로 설정

  .left {
    margin-right: auto;
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .center {
    margin-left: auto;
    margin-right: auto;
    font-size: 1.125rem;
    font-weight: 800;
  }

  .right {
    margin-left: auto;
    font-size: 1.125rem;
    font-weight: 800;
    cursor: pointer;
  }
`;
>>>>>>> 64c67cf312e57e93cdf12e164cf8eb5c1faa463e

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
<<<<<<< HEAD
          삭제
        </PostDeleteButton>
      ) : (
        ''
      )}
    </PostHeader>
=======
          {'<'}
        </div>
        <div className="center">{post.username} 덧붙임</div>
        {post.user_id === user.userId ? (
          <div
            className="right"
            onClick={() => {
              onClickDeleteBtn();
            }}
          >
            삭제
          </div>
        ) : (
          <div className="right"></div>
        )}
      </Wrapper>
    </HeaderBlock>
>>>>>>> 64c67cf312e57e93cdf12e164cf8eb5c1faa463e
  );
};

export default PostViewerHeader;
