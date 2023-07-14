import styled from 'styled-components';

export const MypageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MypageHeaderSection = styled.div`
  width: 100%;
  height: 30%;
  min-height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid brown;
`;

export const MypageBodySection = styled.div`
  width: 100%;
  height: 70%;
  min-height: 70%;
  border: 1px solid brown;
`;

export const MypageProfileBox = styled.section`
  width: 700px;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  transition: all 0.3s;
  border: 1px solid brown;
  @media all and (max-width: 705px) {
    width: 500px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
  }
`;

export const ProfileLeftBox = styled.section`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid brown;
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
  font-size: 13px;
  color: ${(props) => props.theme.primaryColor};
`;

export const ProfileRightBox = styled.section`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid brown;
`;

export const MypageRecordBox = styled.section`
  width: 700px;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  border: 1px solid brown;
  @media all and (max-width: 705px) {
    width: 500px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
  }
`;

export const RecordText = styled.span`
  width: 20%;
  text-align: center;
  font-family: 'DMSansBold';
  font-weight: 900;
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
  line-height: 2;
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
  border: 1px solid yellow;
`;

export const RecordCheckBox = styled.section`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: yellow;
`;
