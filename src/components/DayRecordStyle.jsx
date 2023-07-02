import styled from 'styled-components';

export const DayRecordContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const DayRecordBorder = styled.div`
  width: 100%;
  border-bottom: ${(props) => `1px dashed ${props.theme.textColor}`};
`;

export const DayRecordButton = styled.button`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 3%;
  transform: translate(-50%, 0);
  border: none;
  border-radius: 25px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor};
  font-size: 14px;
  font-family: 'DMSansBold';
  font-weight: 900;
  padding: 10px;
`;

export const DayRecordButtonLine = styled.section`
  width: 125px;
  position: absolute;
  left: 50%;
  bottom: 1%;
  transform: translate(-50%, 0);
  border: ${(props) => `3px solid ${props.theme.textColor}`};
  border-radius: 25px;
`;

// 실시간 인기 덧붙임---------------------------------

export const HotCommentSection = styled.section`
  width: 100%;
  height: 40%;
  padding: 15px;
  margin-bottom: 30px;
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
  gap: 15px;
  flex-wrap: nowrap;
  overflow-x: auto;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  transition: all 0.3s;
  padding: 15px;
  margin: 10px;
`;

export const HotCommentEmptyIcon = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-size: 40px;
`;

export const HotCommentEmptyText = styled.p`
  font-size: 14px;
  font-weight: 900;
  color: ${(props) => props.theme.bgColor};
`;

export const HotCommentContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 15px;
  @media all and (max-width: 400px) {
    width: 270px;
  }
`;

export const HotCommentBoxHeader = styled.section`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

export const HotCommentBoxBody = styled.section`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  line-height: 1.8;
`;

export const HotCommentBoxFooter = styled.section`
  width: 100%;
  height: 20%;
  display: flex;
  line-height: 1.8;
`;

// HotCommentBoxHeader------------------------------------------
export const UserBox = styled.section`
  width: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

export const UserProfile = styled.section`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-image: url(${(props) => props.postUserProfile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const UserName = styled.span`
  font-size: 12px;
  font-family: 'DMSansBold';
  font-weight: 900;
`;

export const DateBox = styled.section`
  width: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.secondaryColor};
`;

export const BookTitle = styled.h1`
  font-size: 12px;
  font-family: 'DMSansBold';
  font-weight: 900;
  color: ${(props) =>
    props.isCool ? props.theme.textColor : props.theme.bgColor};
`;

export const BookContent = styled.p`
  font-size: 11px;
  font-family: 'DMSansRegular';
  color: ${(props) =>
    props.isCool ? props.theme.textColor : props.theme.bgColor};
`;

export const CommentBorder = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const CommentButton = styled.button`
  width: 85px;
  height: 22px;
  border: ${(props) => (props.isCool ? `1.5px solid white` : 'none')};
  border-radius: 25px;
  font-size: 11px;
  background-color: ${(props) =>
    props.isCool ? 'transparent' : props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  opacity: ${(props) => (props.isCool ? '1' : '0.4')};
`;

export const LikeButton = styled.section`
  height: 22px;
  font-size: 12px;
  color: #a11f16;
  display: flex;
  align-items: center;
  gap: 3px;
`;

// 일자별 기록------------------------------------------------
export const DayContainer = styled.div`
  width: 100%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid yellow; */
  margin-top: 30px;
`;

export const DayTodate = styled.h1`
  font-family: 'DMSansBold';
  font-weight: 900;
`;

export const DayEmptySection = styled.section`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DayEmptyIcon = styled.section`
  font-size: 62px;
  color: ${(props) => props.theme.textColor};
`;

export const DayEmptyText = styled.p`
  font-size: 14px;
  font-family: 'DMSansBold';
  font-weight: 900;
  color: ${(props) => props.theme.textColor};
`;

// 일자별 기록-----------------------------------------
export const CommentContainer = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  padding: 15px;
  @media all and (max-width: 400px) {
    width: 270px;
  }
`;
