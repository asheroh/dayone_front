import styled from 'styled-components';

export const MypageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// Mypage Header Section----------------------------------------
export const MypageHeaderSection = styled.div`
  width: 100%;
  height: 30%;
  min-height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MypageProfileBox = styled.section`
  width: 700px;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  border-bottom: ${(props) => `1px dashed ${props.theme.textColor}`};
  @media all and (max-width: 705px) {
    width: 500px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
  }
`;

export const ProfileLeftBox = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProfileMiddleBox = styled.section`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

export const ProfileName = styled.h2`
  font-family: 'DMSansBold';
  font-weight: 900;
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
`;

export const ProfileState = styled.p`
  font-size: 14px;
  color: ${(props) =>
    props.themeMode === 'black'
      ? props.theme.primaryColor
      : props.theme.textColor};
`;

export const ProfileRightBox = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
`;

export const MypageRecordBox = styled.section`
  width: 700px;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  border-bottom: ${(props) => `1px solid ${props.theme.textColor}`};
  @media all and (max-width: 705px) {
    width: 500px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
  }
`;

export const RecordText = styled.span`
  font-family: 'DMSansBold';
  font-weight: 900;
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
  line-height: 1.5;
`;

export const RecordBox = styled.section`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

export const RecordDaily = styled.section`
  width: 14.28%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-weight: ${(props) => (props.today === 0 ? '900' : '')};
  color: ${(props) =>
    props.today === 0 && props.themeMode === 'black'
      ? props.theme.primaryColor
      : ''};
`;

export const RecordCheckBox = styled.section`
  width: 15px;
  height: 15px;
  border: ${(props) =>
    props.today >= 0 && props.check === 0
      ? `1px dashed ${props.theme.primaryColor}`
      : ''};
  border-color: ${(props) =>
    props.themeMode === 'black' && props.check === 0
      ? props.theme.primaryColor
      : props.themeMode === 'white' && props.check === 0
      ? props.theme.textColor
      : ''};
  border-radius: 50%;
  background-color: ${(props) =>
    props.check !== 0 && props.today <= 0 && props.themeMode === 'black'
      ? props.theme.primaryColor
      : props.check !== 0 && props.today <= 0 && props.themeMode === 'white'
      ? props.theme.textColor
      : props.check === 0 && props.today < 0
      ? props.theme.secondaryColor
      : 'transparent'};
`;

// Mypage Body Section----------------------------------------
export const MypageBodySection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MypageBox = styled.section`
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  @media all and (max-width: 705px) {
    width: 500px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
  }
`;

export const MypageRecordText = styled.h2`
  width: 100%;
  font-family: 'DMSansBold';
  font-weight: 900;
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
`;

export const MypageGridBox = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  justify-items: center;
  align-items: center;
  column-gap: 10px;
  row-gap: 7px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fit, 1fr);
  transition: all 0.3s;
  @media all and (max-width: 705px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media all and (max-width: 505px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MypageBookImage = styled.img`
  width: 100%;
  height: auto;
  transition: all 0.3s;
`;

// Mypage Post detail------------------------------------------
export const PostDetailContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const PostDetailHeader = styled.section`
  width: 100%;
  height: 120px;
  position: relative;
  border-bottom: ${(props) => `1px solid ${props.theme.secondaryColor}`};
`;

export const PostDetailBody = styled.section`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 15px;
`;

export const PostDetailBox = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  border-bottom: ${(props) => `1px solid ${props.theme.secondaryColor}`};
  &:hover {
    box-shadow: 0px 0px 10px 4px rgba(78, 78, 78, 0.5);
  }
`;

export const PostDetailPubDate = styled.h3`
  font-family: 'DMSansBold';
  font-weight: 900;
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
`;
