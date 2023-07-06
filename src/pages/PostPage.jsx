import React from 'react';
import PostViewerHeader from '../components/post/PostViewerHeader';
import PostViewer from '../components/post/PostViewer';
import { useLocation } from 'react-router-dom';

const PostPage = () => {
  const location = useLocation();
  const post = location.state.post;

  return (
    <>
      <PostViewerHeader post={post} />
      <br /> <br /> <br /> <br /> <br />
      <PostViewer />
    </>
  );
};

export default PostPage;
