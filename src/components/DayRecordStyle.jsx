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
  position: fixed;
  left: 50%;
  bottom: 3%;
  transform: translate(-50%, 0);
  border: none;
  border-radius: 25px;
  background-color: ${(props) => props.theme.primaryColor};
  color: black;
  font-size: 14px;
  font-family: 'DMSansBold';
  font-weight: 900;
  padding: 10px;
  cursor: pointer;
`;

export const DayRecordButtonLine = styled.section`
  width: 125px;
  position: fixed;
  left: 50%;
  bottom: 1%;
  transform: translate(-50%, 0);
  border: ${(props) => `3px solid ${props.theme.textColor}`};
  border-radius: 25px;
`;

// 실시간 인기 덧붙임---------------------------------

export const HotCommentSection = styled.section`
  width: 100%;
  height: 65%;
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
  color: ${(props) => props.theme.textColor};
`;

export const HotCommentContainer = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 15px;
  transition: all 0.3s;
  @media all and (min-width: 1028px) {
    width: 500px;
  }
  @media all and (min-width: 768px) and (max-width: 1028px) {
    width: 400px;
  }
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
  border: ${(props) =>
    props.isCool ? `1.5px solid ${props.theme.textColor}` : 'none'};
  border-radius: 25px;
  font-size: 11px;
  background-color: ${(props) =>
    props.isCool ? 'transparent' : props.theme.secondaryColor};
  color: ${(props) =>
    props.isCool ? props.theme.textColor : props.theme.bgColor};
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

export const DayPickerBox = styled.section`
  width: auto;
  height: auto;
  position: absolute;
  top: 150%;
  transition: all 0.3s;
`;

export const DayTodate = styled.h1`
  font-family: 'DMSansBold';
  font-weight: 900;
  position: relative;
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
export const CommentGridContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  justify-items: center;
  gap: 15px;
  transition: all 0.3s;
  margin-top: 30px;
  @media all and (max-width: 1680px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
  }
  @media all and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
  }
  @media all and (max-width: 860px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
  }
`;

export const CommentContainer = styled.div`
  width: 400px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props.theme.secondaryColor}`};
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  padding: 15px;
  @media all and (max-width: 400px) {
    min-width: 100%;
  }
`;

// 기록하기 페이지------------------------------------------------
export const PostContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const PostHeader = styled.section`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  border-bottom: ${(props) => `1px solid ${props.theme.textColor}`};
  padding: 15px 0;
  @media all and (max-width: 400px) {
    height: 20%;
  }
`;

export const PostLogoBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-family: 'DMSansBold';
  font-weight: 900;
  color: ${(props) => props.theme.textColor};
`;

export const PostLogo = styled.img`
  width: 150px;
  transition: all 0.3s;
`;

export const PostHandleButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  border: none;
  font-size: 14px;
  transition: all 0.3s;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    text-decoration: underline;
  }
`;

export const PostBody = styled.section`
  width: 100%;
  min-height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (max-width: 400px) {
    min-height: 70%;
  }
`;

export const PostFormBox = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: relative;
  padding: 15px;
  transition: all 0.3s;
`;

export const PostTitleInput = styled.input`
  width: 90%;
  height: 45px;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  padding: 10px;
  border: none;
  border-bottom: ${(props) => `1px solid ${props.theme.textColor}`};
`;

export const PostContentInput = styled.textarea`
  width: 90%;
  min-height: 200px;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  padding: 10px;
  border: none;
  border-bottom: ${(props) => `1px dashed ${props.theme.textColor}`};
  resize: none;
`;

export const PostCommentBox = styled.section`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PostCommentInput = styled.textarea`
  width: 90%;
  min-height: 200px;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  padding: 10px;
  border: none;
  border-bottom: ${(props) => `1px solid ${props.theme.textColor}`};
  resize: none;
`;

export const PostBookSelectSection = styled.section`
  width: 90%;
  height: 250px;
  display: ${(props) =>
    props.bookname === '' || props.isSelected ? 'none' : 'flex'};
  position: absolute;
  top: 60px;
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  overflow-y: auto;
  padding: 15px;
  line-height: 1.5;
  z-index: 1;
  border: ${(props) => `1px solid ${props.theme.textColor}`};
`;

export const BookSelectLeftBox = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BookSelectRightBox = styled.section`
  width: 30%;
  height: 100%;
  position: sticky;
  top: 5px;
  text-align: right;
`;

export const PostBookSelectBox = styled.section`
  width: 100%;
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`;

export const PostImageSection = styled.section`
  width: 100%;
  height: 250px;
  min-height: 250px;
  max-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostImage = styled.img`
  width: 150px;
`;

export const PostSmallImage = styled.img`
  width: 100px;
  height: auto;
`;

export const PostContentSection = styled.section`
  width: 100%;
  height: 200px;
  border: 1px solid gray;
`;

export const PostCommentSection = styled.section`
  width: 100%;
  height: 200px;
  border: 1px solid gray;
`;

// Day Record Detail------------------------------------
export const PostBackButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(0, -50%);
  color: ${(props) => props.theme.textColor};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const PostDeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translate(0, -50%);
  color: ${(props) => props.theme.textColor};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const PostDetailOwner = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.textColor};
  font-family: 'DMSansBold';
  font-weight: 900;
`;

export const PostDetailThumbnailBox = styled.div`
  width: 700px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
  border-bottom: ${(props) => `1px dashed ${props.theme.textColor}`};
  margin-top: 30px;
  transition: all 0.3s;
  @media all and (max-width: 705px) {
    width: 500px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
  }
`;

export const PostDetailThumbnailLeft = styled.section`
  height: 45px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PostDetailThumbnailRight = styled.h4`
  color: ${(props) => props.theme.secondaryColor};
  font-family: 'DMSansRegular';
  font-size: 12px;
`;

export const PostDetailThumbnail = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const PostDetailOwnerBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PostDetailName = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-family: 'DMSansBold';
  font-weight: 900;
  font-size: 14px;
`;
export const PostDetailDate = styled.h3`
  color: ${(props) => props.theme.secondaryColor};
  font-size: 12px;
`;

export const PostBookThumbnail = styled.img`
  width: 200px;
  height: auto;
  transition: all 0.3s;
  @media all and (max-width: 400px) {
    width: 150px;
  }
`;

export const PostBookName = styled.h1`
  font-family: 'DMSansBold';
  font-weight: 900;
  font-size: 14px;
  line-height: 2;
`;

export const PostBookContentBox = styled.section`
  width: 700px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  @media all and (max-width: 705px) {
    width: 500px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
  }
`;

export const PostBookPassage = styled.h2`
  font-size: 14px;
  line-height: 2;
`;

export const PostBookComment = styled.h3`
  font-size: 14px;
  line-height: 2;
`;

export const PostBookFooter = styled.div`
  width: 700px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  position: sticky;
  bottom: 0;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 0px -20px 25px -4px rgba(0, 0, 0, 0.75);
  transition: all 0.3s;
  z-index: 1;
  @media all and (max-width: 705px) {
    width: 500px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
  }
  border-top: ${(props) => `1px solid ${props.theme.secondaryColor}`};
`;

export const FooterLeftBox = styled.section`
  width: auto;
`;

export const NiceButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: transparent;
  color: ${(props) =>
    props.isSympathy === '1' ? '#73a8f1' : props.theme.secondaryColor};
  border: none;
  cursor: pointer;
`;

export const HeartButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: transparent;
  color: ${(props) =>
    props.isSympathy === '1' ? '#f1738c' : props.theme.secondaryColor};
  border: none;
  cursor: pointer;
`;

export const FooterRightBox = styled.section`
  width: auto;
  font-size: 20px;
  cursor: pointer;
`;
