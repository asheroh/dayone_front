import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PostHandleButton, PostHeader, PostLogoBox } from '../DayRecordStyle';

const FormHeader = ({ clickMethod }) => {
  const navigate = useNavigate();
  return (
    <PostHeader>
      <PostHandleButton onClick={() => navigate(-1)}>취소</PostHandleButton>
      <PostLogoBox>데모 신청</PostLogoBox>
      <PostHandleButton onClick={clickMethod}>등록</PostHandleButton>
    </PostHeader>
  );
};

export default FormHeader;
