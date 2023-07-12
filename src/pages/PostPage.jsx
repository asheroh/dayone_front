import React from 'react';
import PostViewerHeader from '../components/post/PostViewerHeader';
import PostViewer from '../components/post/PostViewer';
import { useLocation } from 'react-router-dom';
import { PostContainer } from '../components/DayRecordStyle';

const PostPage = () => {
  const location = useLocation();
  const post = location.state.post;

  // console.log('post:', post);

  // console.log('username:', post.username);
  // console.log('userId:', user.userId);

  return (
    <>
      <PostContainer>
        <PostViewerHeader post={post} />
        <PostViewer />
      </PostContainer>
    </>
  );
};

export default PostPage;
