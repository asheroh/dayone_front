import styled from 'styled-components';

export const DayRecordContainer = styled.div`
  width: 100%;
  height: 100%;
`;

// 실시간 인기 덧붙임---------------------------------

export const HotCommentSection = styled.section`
  width: 100%;
  height: 40%;
  padding: 15px;
`;

export const HotCommentHeader = styled.h1`
  font-family: 'DMSansBold';
  font-weight: 900;
  color: ${(props) => props.theme.textColor};
`;

export const HotCommentScrollBox = styled.section`
  width: 95%;
  height: 90%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  transition: all 0.3s;
  padding: 15px;
  margin: 10px;
`;
